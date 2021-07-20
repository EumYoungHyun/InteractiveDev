(() => {
    const canvas = document.querySelector("#canvas2");
    const context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 450;

    let particleArray = [];

    let mouse = {
        x: null,
        y: null,
        radius: 100,
    };

    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x - canvas.clientLeft;
        mouse.y = event.y - canvas.clientTop;

        console.log(event.x, event.y, canvas.clientLeft, canvas.clientTop);
    });
})();
