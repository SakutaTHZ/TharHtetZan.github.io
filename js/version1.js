const themeColors = {
  dark: {
    "--background": "#101010",
    "--bgline": "#33333330",
    "--primary": "#3b3486",
    "--hightlight": "#f8e559",
    "--secondary": "#864af9",
    "--font-color": "rgb(225, 225, 225)",
    "--shadow": "rgba(0, 0, 0, 0.3)",
    "--brightness": "brightness(.4)",
  },
  light: {
    "--background": "#e9e9e9",
    "--bgline": "#f6770120",
    "--primary": "#3b3486",
    "--hightlight": "#f67701",
    "--secondary": "#864af9",
    "--font-color": "rgb(44, 44, 44)",
    "--shadow": "rgba(255, 255, 255, 0.3)",
    "--brightness": "brightness(.8)",
  },
};

const introsequence = false;

const theme = 0;

const switchBox = document.querySelector(".switchBox");
const switchBtn = document.querySelector(".switchBox>.switch");

switchBox.addEventListener("click", () => {
  switchBtn.classList.toggle("on");
  localStorage.getItem("currentTheme") === "dark"
    ? updateTheme("white")
    : updateTheme("dark");
});

const updateTheme = (color) => {
  if (color === "dark") {
    switchBtn.classList.add("on");
    changeTheme("dark");
  } else {
    switchBtn.classList.remove("on");
    changeTheme("light");
  }
  localStorage.setItem("currentTheme", color);
};

const changeTheme = (themeName) => {
  const theme = themeColors[themeName];
  if (theme) {
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  } else {
    console.error(`Theme '${themeName}' not found.`);
  }
};

const loadStoredColor = () => {
  const storedColor = localStorage.getItem("currentTheme");
  if (storedColor) {
    storedColor === "dark" ? updateTheme("dark") : updateTheme("white");
  } else {
    updateTheme("dark");
  }
};

loadStoredColor();

const crateIntroBox = () => {
  // Create the main container
  const introBox = document.createElement("div");
  introBox.className = "introBox";

  // Create the first box
  const box1 = document.createElement("div");
  box1.className = "box";

  // Create the second box with a counter
  const box2 = document.createElement("div");
  box2.className = "box";
  const counter = document.createElement("p");
  counter.className = "counter";
  box2.appendChild(counter);

  // Create the third box
  const box3 = document.createElement("div");
  box3.className = "box";

  // Create the CTC container
  const ctc = document.createElement("div");
  ctc.className = "CTC";

  // Create the pulseBox
  const pulseBox = document.createElement("div");
  pulseBox.className = "pulseBox interactable";
  pulseBox.setAttribute("data-type", "fingerprint");

  // Create the CTC text
  const ctcText = document.createElement("p");
  ctcText.className = "interactable";
  ctcText.setAttribute("data-type", "fingerprint");
  ctcText.textContent = "Click To Continue";

  // Append all elements to their respective parents
  ctc.appendChild(pulseBox);
  ctc.appendChild(ctcText);
  introBox.appendChild(box1);
  introBox.appendChild(box2);
  introBox.appendChild(box3);
  introBox.appendChild(ctc);

  // Append the main container to the body
  document.body.appendChild(introBox);
};

if (introsequence) {
  crateIntroBox();

  const clickIntro = document.querySelector(".CTC");
  clickIntro.addEventListener("click", () => {
    const elements = document.querySelectorAll(".box");
    const counterBox = document.querySelector(".introBox>.box>.counter");
    let currentIndex = 0;

    setInterval(() => {
      elements[currentIndex].classList.add("moveleft");
      currentIndex = (currentIndex + 1) % elements.length;
    }, 750);

    clickIntro.style.opacity = 0;

    let counter = 0;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        counterBox.innerHTML = counter++;
        if (counter === 4) {
          clearInterval(intervalId);
          counterBox.innerHTML = "Welcome";
        }
      }, 750);
    }, 2500);

    setTimeout(() => {
      setInterval(() => {
        elements[currentIndex].classList.add("moveright");
        currentIndex = (currentIndex + 1) % elements.length;
      }, 750);
      setTimeout(() => {
        document.querySelector(".introBox").classList.add("remove");

        setTimeout(() => {
          document.querySelector("nav").classList.remove("hold");
        }, 1000);
      }, 3000);
    }, 6000);
  });
}

//Moving bulb in the background
const animatedDiv = document.querySelector(".lightbulb");

const getRandomPercentage = () => {
  return Math.floor(Math.random() * 100) + "%";
};

const getRandomPosition = (maxValue) => {
  return Math.floor(Math.random() * maxValue) + "px";
};

const setBulbSize = () => {
  return Math.floor(Math.random() * 41) + 10 + "vh";
};
const getRandomBlurValue = () => {
  return Math.floor(Math.random() * 101) + 50 + "px";
};

function changeBorderRadiusAndPosition() {
  const borderRadius = `${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()}`;
  animatedDiv.style.borderRadius = borderRadius;

  let bulbSize = setBulbSize();
  animatedDiv.style.width = bulbSize;
  animatedDiv.style.height = bulbSize;

  const maxWidth = window.innerWidth - 200;
  const maxHeight = window.innerHeight - 200;

  const top = getRandomPosition(maxHeight);
  const left = getRandomPosition(maxWidth);
  animatedDiv.style.top = top;
  animatedDiv.style.left = left;

  const blurValue = getRandomBlurValue();
  animatedDiv.style.filter = `blur(${blurValue}) opacity(.3)`;
}

setInterval(changeBorderRadiusAndPosition, 4000);

changeBorderRadiusAndPosition();

const defaultSize = document.querySelector(".marquee");
const setSizes = () => {
  const leftBar = document.querySelector(".leftBar");
  leftBar.style.width = defaultSize.offsetHeight + "px";
};

setSizes();

//add mouse click effect 
let body=document.querySelector('body')
body.addEventListener("click", (event)=>{
  let spark=document.createElement('div')
  spark.classList.add('spark')
  body.appendChild(spark)

  spark.style.top = (event.clientY - body.offsetTop)+'px'
  spark.style.left = (event.clientX - body.offsetLeft)+'px'
  spark.style.filter = `hue-rotate(${(Math.random()*360)}deg)`

  for (let i = 0; i <= 7; i++) {
    let span = document.createElement('span')
    span.style.transform = `rotate(${(i*45)}deg)`
    spark.appendChild(span)
  }

  setTimeout(() => {
    spark.remove()
  }, 500);
})
