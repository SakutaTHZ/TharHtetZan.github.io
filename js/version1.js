const themeColors = {
  dark: {
    "--background": "#101010",
    "--bgline": "#33333350",
    "--primary": "#3b3486",
    "--hightlight": "#f8e559",
    "--secondary": "#864af9",
    "--font-color": "rgb(225, 225, 225)",
    "--shadow": "rgba(0, 0, 0, 0.3)",
  },
  light: {
    "--background": "#e9e9e9",
    "--bgline": "#f6770120",
    "--primary": "#3b3486",
    "--hightlight": "#f67701",
    "--secondary": "#864af9",
    "--font-color": "rgb(44, 44, 44)",
    "--shadow": "rgba(255, 255, 255, 0.3)",
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

const trailer = document.querySelector(".trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px,${y}px) scale(${interacting ? 3  : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;

  animateTrailer(e, interacting)

  const trailer = document.querySelector(".trailer")
  const icon = document.querySelector(".trailer>span")
  const text = document.querySelector(".trailer>p")
  if (interacting) {
    if((trailer.offsetWidth + e.clientX + 20) > window.innerWidth){
      trailer.style.transformOrigin = "top right"
    }else{
      trailer.style.transformOrigin = "top left"
    }
    icon.innerText = interactable.dataset.type
    text.innerText = interactable.dataset.text
  }else{
    icon.innerText = ""
    text.innerText = ""
  }

  // console.log(`mouseX - ${e.clientX}\nmouseY - ${e.clientY}\nWidth - ${trailer.offsetWidth + e.clientX + 20}\nWindow ${window.innerWidth}`)
};
