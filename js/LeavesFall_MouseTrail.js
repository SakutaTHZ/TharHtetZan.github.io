// colorMode | 0 - default | 1 - pastel mode | 2 - Custom Color
var colorMode = 0

var defaultcolors = ["#3b3486","#f8e559","#864af9","#ffffff"]
var customcolors = ["darkgrey","grey","lightgrey","white"] // change this to your own preference

const trailmode = ["trailfall1","trailfall2","trailfall3"]

var animationTiming = 1
var spawnDistance = 25
var particleSize = 5  
var particleOpacity = 1

// Set data 
const selectRandomColor = ()=> colorMode == 0 ? defaultcolors[Math.floor(Math.random()*(defaultcolors.length-1))] : colorMode == 1 ? getPastelColor() : customcolors[Math.floor(Math.random()*(customcolors.length-1))]
const selectRandomTrail = ()=> trailmode[Math.floor(Math.random()*(trailmode.length-1))]

// For generating mouse trail
const last = {x:0,y:0}

const calcDistance=(current,last)=>Math.sqrt((current.x - last.x)*(current.x - last.x) + (current.y - last.y)*(current.y - last.y));

const generateTrailBox = ()=> {
  const trailBox = document.createElement("div")
  trailBox.className = "trailBox"
  document.querySelector("body").appendChild(trailBox)
  return trailBox
}

window.onmousemove = e => {
    const current = {x:e.clientX,y:e.clientY}
    if(calcDistance(current,last) >= spawnDistance){
        const box = document.querySelector('.trailBox') == undefined ? generateTrailBox() : document.querySelector('.trailBox')

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const dot = document.createElement("div")
        dot.className = "trail"
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
        dot.style.background = selectRandomColor()
        dot.style.animationFillMode = "forwards" 
        dot.style.animation = `${selectRandomTrail()} ${animationTiming}s linear`
        box.appendChild(dot)
        setTimeout(()=> box.removeChild(dot),1500)
        
        last.x = current.x
        last.y = current.y
    }
}

// For Generating Soft Pastel Color
function getPastelColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

// Add the required styles
const style = document.createElement('style');
style.className = "mouseTrailStyle"

style.textContent = `
  .trailBox {
    position: fixed;
    inset: 0;
    z-index: -1000;
    width: 100dvw;
    height: 100dvh;
  }
  .trail {
    position: absolute;
    height: ${particleSize}px;
    width: ${particleSize}px;
    border-radius: 50%;
    z-index: 10000;
    opacity: 0;
  }
  @keyframes trailfall1 {
    from {
      transform: translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(2)
        skew(20deg);
      opacity: ${particleOpacity};
    }
    to {
      transform: translate(0px, 50px) rotateX(90deg) rotateY(90deg) scale(0);
      opacity: 0;
    }
  }
  @keyframes trailfall2 {
    from {
      transform: translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1.5);
      opacity: ${particleOpacity};
    }
    to {
      transform: translate(0px, -15px) rotateX(-90deg) rotateY(90deg) scale(0);
      opacity: 0;
    }
  }
  @keyframes trailfall3 {
    from {
      transform: translate(0px, 10px) rotateX(0deg) rotateY(0deg) scale(1);
      opacity: ${particleOpacity} ;
    }
    to {
      transform: translate(0px, 150px) rotateX(90deg) rotateY(-90deg) scale(0);
      opacity: 0;
    }
  }
`;

document.head.appendChild(style);
