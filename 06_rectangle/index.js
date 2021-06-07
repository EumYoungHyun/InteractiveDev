(() => {
  const canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");
  context.lineJoin = "rount";
  context.lineWidth = 30;

  context.font = "24px Helvetica";
  context.fillText("Click anywhere to erase", 175, 40);

  context.strokeRect(75, 100, 200, 200);
  context.fillRect(325, 100, 200, 200);

  context.canvas.onmousedown = function (e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };
})();
