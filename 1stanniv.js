window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onload = function () {
  if (sessionStorage.getItem("authenticated") !== "true") {
    window.location.href = "index.html";
  }
};

const ANIMATION_DURATION = 500;
  
function padNumber(num) {
  return num.toString().padStart(2, '0');
}

function updateStopwatch() {
  const startTime = new Date("April 3, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const elapsedTime = now - startTime;

  const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  updateElement("days", padNumber(days));
  updateElement("hours", padNumber(hours));
  updateElement("minutes", padNumber(minutes));
  updateElement("seconds", padNumber(seconds));
}

function updateElement(id, newValue) {
  const currentElement = document.getElementById(id);
  if (currentElement.innerText !== String(newValue)) {
    currentElement.classList.add("slide-out");

    setTimeout(() => {
      const newSpan = document.createElement("span");
      newSpan.className = "number slide-in";
      newSpan.innerText = newValue;
      newSpan.id = id;

      currentElement.replaceWith(newSpan);

      newSpan.offsetWidth;
      newSpan.classList.remove("slide-in");
    }, 500);
  }
}

setInterval(updateStopwatch, 1000);
updateStopwatch();

const getNavigationHeight = document.querySelector('.navbar').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', getNavigationHeight + "px");




