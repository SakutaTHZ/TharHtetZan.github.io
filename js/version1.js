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

// For intro
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

const animatedDiv = document.querySelector(".lightbulb");

const getRandomPercentage=() =>{
  return Math.floor(Math.random() * 100) + "%";
}

const getRandomPosition=(maxValue) =>{
  return Math.floor(Math.random() * maxValue) + "px";
}

const setBulbSize = () =>{
  return Math.floor(Math.random() * 41) + 10 + 'vh';
}
const getRandomBlurValue=()=> {
  return Math.floor(Math.random() * 101) + 50 + 'px';
}

function changeBorderRadiusAndPosition() {
  const borderRadius = `${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()}`;
  animatedDiv.style.borderRadius = borderRadius;

  let bulbSize = setBulbSize()
  animatedDiv.style.width = bulbSize
  animatedDiv.style.height = bulbSize

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

const defaultSize = document.querySelector(".marquee")
console.log(defaultSize.offsetHeight)
const setSizes = () =>{
  const leftBar=document.querySelector(".leftBar")
  console.log(leftBar.offsetWidth)
  leftBar.style.width=defaultSize.offsetHeight + "px"
  console.log(leftBar.offsetWidth)
}

setSizes()