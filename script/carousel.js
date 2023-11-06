const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");

const moveLeft = () => {
  CAROUSEL.appendChild(CAROUSEL.firstElementChild);
};

const moveRight = () => {
  CAROUSEL.insertBefore(CAROUSEL.lastElementChild, CAROUSEL.firstElementChild);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);
