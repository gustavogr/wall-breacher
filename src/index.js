const WALL_CSS_SELECTOR = "div.fc-ab-root";

function breach() {
  const wall = findWall();
  wall.remove();

  document.body.style.overflow = "scroll";
}

function findWall() {
  return document.querySelector(WALL_CSS_SELECTOR);
}

setInterval(() => {
  if (findWall()) {
    breach();
  }
}, 3000);
