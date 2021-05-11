document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // check width and height of the canvas
    console.log("dimensions", canvas.width, canvas.height);

    // verify canvas DOM node
    console.log(canvas instanceof HTMLCanvasElement, canvas.HTMLC);

    // verify rendering context interface
    console.log(ctx instanceof CanvasRenderingContext2D);
});
