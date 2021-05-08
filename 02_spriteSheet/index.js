const canvas = document.querySelector("#canvas"),
  readOut = document.querySelector("#read-out"),
  context = canvas.getContext("2d"),
  spritesheet = new Image();

function windowToCanvas(canvas, x, y) {
  let bbox = canvas.getBoundingClientRect();
  return {
    x: x - bbox.left * (canvas.width / bbox.width),
    y: y - bbox.top * (canvas.height / bbox.height),
  };
}

function drawBackground() {
  const VERTICAL_LINE_SPACING = 12;
  let i = context.canvas.height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "lightgray";
  context.lineWidth = 0.5;

  while (i > VERTICAL_LINE_SPACING * 4) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(context.canvas.width, i);
    context.stroke();
    i -= VERTICAL_LINE_SPACING;
  }
}

function drawSpritesheet() {
  context.drawImage(spritesheet, 0, 0);
}

function updateReadout(x, y) {
  readOut.innerText = "(" + x.toFixed(0) + ", " + y.toFixed(0) + ")";
}

function drawGuidelines(x, y) {
  context.strokeStyle = "rgba(0,0,230,0.8)";
  context.lineWidth = 0.5;
  drawVerticalLine(x);
  drawHorizontalLine(y);
}

function drawVerticalLine(x) {
  context.beginPath();
  context.moveTo(x + 0.5, 0);
  context.lineTo(x + 0.5, context.canvas.height);
  context.stroke();
}

function drawHorizontalLine(y) {
  context.beginPath();
  context.moveTo(0, y + 0.5);
  context.lineTo(context.canvas.width, y + 0.5);
  context.stroke();
}

canvas.onmousemove = function (e) {
  const loc = windowToCanvas(canvas, e.clientX, e.clientY);

  drawBackground();
  drawSpritesheet();
  updateReadout(loc.x, loc.y);
  drawGuidelines(loc.x, loc.y);
};

spritesheet.src = "working-sprite-sheet.png";
spritesheet.onload = function (e) {
  drawSpritesheet();
};

drawBackground();
