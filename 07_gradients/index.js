(() => {
  const canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d"),
    gradient = context.createLinearGradient(0, 0, canvas.width, 0);

  gradient.addColorStop(0, "blue");
  gradient.addColorStop(0.25, "white");
  gradient.addColorStop(0.5, "purple");
  gradient.addColorStop(0.75, "red");
  gradient.addColorStop(0.1, "yellow");

  context.fillStyle = gradient;
  context.rect(0, 0, canvas.width, canvas.height);
})();
