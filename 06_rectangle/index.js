(() => {
  const canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");
  context.lineJoin = "round";
  context.lineWidth = 30;

  context.font = "24px Helvetica";
  context.fillText("Click anywhere to erase", 175, 40);

  context.strokeRect(75, 100, 200, 200);
  context.fillRect(325, 100, 200, 200);

  context.lineJoin = "round";
  context.lineWidth = 30;

  context.font = "24px Helvetica";
  context.fillText("Click anywhere to erase", 175, 600);

  context.strokeStyle = "goldenrod";
  context.fillStyle = "rgba(0, 0, 255, 0.5)";

  context.strokeRect(75, 500, 200, 200);
  context.fillRect(325, 500, 200, 200);
  context.canvas.onmousedown = function (e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };
})();
