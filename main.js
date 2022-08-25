function createHeader() {
  const header = document.createElement("h1");
  header.innerHTML = "The Best Game Ever";
  header.style.color = "#c0392b";
  header.style.fontFamily = "Helvetica";
  header.setAttribute("class", "my-header");
  document.body.appendChild(header);
}

function createSubHeader() {
  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "Game by: ~George Hill~";
  subHeader.style.color = "purple";
  subHeader.style.fontFamily = "Helvetica";
  subHeader.setAttribute("class", "my-sub-header");
  document.body.appendChild(subHeader);
}

createHeader();
createSubHeader();

// Continue of the Game

(function(){
const CLICK_DISTANCE = 50;
const playingField = document.getElementById("playing-field");
const ball = document.getElementById("ball");
const right = document.getElementById("right");
const left = document.getElementById("left");
const up = document.getElementById("up");
const down = document.getElementById("down");
const arrows = document.getElementById("arrows");

const rightLimit =
  parseInt(playingField.clientWidth) - parseInt(ball.clientWidth);
const leftLimit = 0;
const upperLimit = 0;
const buttomLimit =
  parseInt(playingField.clientHeight) -
  parseInt(ball.clientHeight) -
  parseInt(arrows.clientHeight);

right.onclick = function () {
  let new_distance = Math.min(
    rightLimit,
    (parseInt(ball.style.left) || 0) + CLICK_DISTANCE
  );
  ball.style.left = new_distance + "px";
};

left.onclick = function () {
  let new_distance = Math.max(
    leftLimit,
    (parseInt(ball.style.left) || 0) - CLICK_DISTANCE
  );
  ball.style.left = new_distance + "px";
};

down.onclick = function () {
  let new_distance = Math.min(
    buttomLimit,
    (parseInt(ball.style.top) || 0) + CLICK_DISTANCE
  );
  ball.style.top = new_distance + "px";
};

up.onclick = function () {
  let new_distance = Math.max(
    upperLimit,
    (parseInt(ball.style.top) || 0) - CLICK_DISTANCE
  );
  ball.style.top = new_distance + "px";
};
})()