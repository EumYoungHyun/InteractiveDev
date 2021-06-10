(() => {
  const canvas = document.querySelector("#canvas"),
    context = canvas.getContext("2d");
  // let gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  // let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  let gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );

  console.log(gradient);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(0.25, "white");
  gradient.addColorStop(0.5, "purple");
  gradient.addColorStop(0.75, "red");
  gradient.addColorStop(1, "yellow");

  console.log(gradient);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
})();
