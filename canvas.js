const canvas = document.getElementById("canvas-board");
const context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

console.log(canvas.height);

context.fillStyle = "black";
context.fillRect(10, 10, 50, 50);

context.fillStyle = "red";
context.fillRect(100, 70, 70, 70);

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 30;
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();

context.beginPath();
context.arc(100, 400 / 2, 50, 0, 2 * Math.PI);
context.fillStyle = "purple";
context.fill();

context.beginPath();
context.arc(200, 400, 40, 0, 2 * Math.PI);
context.fillStyle = "brown";
context.fill();

context.beginPath();
context.arc(500, 120, 40, 0, 2 * Math.PI);
context.fillStyle = "gray";
context.fill();

let step = 20,
  x1 = 300,
  x2 = 500,
  x3 = 100;
setInterval(() => {
  context.clearRect(x1, 70, 90, 90);
  context.clearRect(x2, 400, 90, 90);
  context.clearRect(x3, 200, 50, 50);
  context.fillStyle = "white";
  context.fillRect((x1 += step), 70, 90, 90);
  context.fillStyle = "white";
  context.fillRect((x2 += step), 400, 90, 90);
  context.fillStyle = "white";
  context.fillRect((x3 += step), 200, 50, 50);
}, 500);

const floor = {
  x: 0,
  y: canvas.height - 50,
  width: canvas.width,
  height: 100,
};

context.fillStyle = "black";
context.fillRect(floor.x, floor.y, floor.width, floor.height);

const player = {
  x: 20,
  y: canvas.height - 150,
  width: 90,
  height: 100,
};

const KeyUp = () => {
  context.clearRect(player.x, player.y, player.width, player.height);
  context.fillStyle = "orange";
  context.fillRect(player.x, player.y, player.width, player.height);

  addEventListener("keydown", (e) => {
    context.clearRect(player.x, player.y, player.width, player.height);

    if (e.key == "ArrowUp") {
      player.y -= 1;
      setTimeout(() => {
        context.clearRect(player.x, player.y, player.width, player.height);
        player.y += 1;
        player.y = canvas.height - 150;
        console.log(player.y);
      }, 200);
    }
  });

  requestAnimationFrame(KeyUp);
};

KeyUp();
