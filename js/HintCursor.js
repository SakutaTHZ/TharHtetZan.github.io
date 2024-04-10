// How to use
// Add the data tags [data-type],[data-text] to your desired content
// Add className [interactable] to let the cursor know that it is interactable
// [data-type] is for the icon name (I used Google icons in this script)
// [data-text] is for the subtitle

const trailerDiv = document.createElement("div");
trailerDiv.classList.add("trailer");
trailerDiv.innerHTML = `
        <span class="material-symbols-outlined"></span>
        <p></p>
    `;

document.querySelector("body").appendChild(trailerDiv);

const styleElement = document.createElement("style");

styleElement.textContent = `
    .trailer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        min-height: 10px;
        min-width: 10px;
        padding: 3px;
        background: var(--hightlight);
        border-radius: 20px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: 0.5s ease;
    }
    .trailer > span {
        font-size: 8px;
        color: var(--background);
    }
    .trailer > p,
    .trailer > p > b {
        font-size: 5px;
        color: var(--background);
    }
    .trailer > p:empty {
        display: none;
    }
    body:hover > .trailer {
        opacity: 1;
    }
`;

var isMobileWidth = () => {
  return window.innerWidth <= 768;
}

const hintCursor = () => {
  // Append the style element to the document head
  document.head.appendChild(styleElement);

  const trailer = document.querySelector(".trailer");

  const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px,${y}px) scale(${interacting ? 3 : 1})`,
    };

    trailer.animate(keyframes, {
      duration: 400,
      fill: "forwards",
    });
  };

  window.onmousemove = (e) => {
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null;

    animateTrailer(e, interacting);

    const trailer = document.querySelector(".trailer");
    const icon = document.querySelector(".trailer>span");
    const text = document.querySelector(".trailer>p");
    if (interacting) {
      if (trailer.offsetWidth + e.clientX + 20 > window.innerWidth) {
        trailer.style.transformOrigin = "center right";
      } else if (e.clientX - (trailer.offsetWidth + 30) < 0) {
        trailer.style.transformOrigin = "center left";
      } else {
        trailer.style.transformOrigin = "center center";
      }
      icon.innerHTML = interactable.dataset.type
        ? interactable.dataset.type
        : "";
      text.innerHTML = interactable.dataset.text
        ? interactable.dataset.text
        : "";
    } else {
      icon.innerHTML = "";
      text.innerHTML = "";
    }

    // console.log(`mouseX - ${e.clientX}\nmouseY - ${e.clientY}\nWidth - ${e.clientX - (trailer.offsetWidth +30)}\nWindow ${window.innerWidth}`)
  };
};

if (isMobileWidth()) {
  console.log("Disabled mouse effect");
} else {
  hintCursor()
  console.log("Not a mobile device");
}