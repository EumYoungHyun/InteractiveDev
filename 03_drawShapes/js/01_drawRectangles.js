document.addEventListener("DOMContentLoaded", function () {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    /**
     *  Draw something on canvas
     *
     *  to draw anything on the canvas, we need not only to specify
     *   the dimensions of the shape but also its location on canvas.
     *
     *   The entire canvas area represents a cartesian coordinate system,
     *   but only the area between positive x and y axes.
     */

    // CanvasRenderingContext2D
    // drawing rectangle by rect function
    // ctx.rect(x, y, width, height);

    // if i have to fill color in shapes
    // i can use fill() and stroke() function
    // fill is a particular color inside it
    // and stroke is the edges (to give a border)

    // Ideally, i need to set the fill and stroke color
    // before i call the fill and stroke method.
    // Setting fillStyle and strokeStyle later will have no effect.

    /*----------------------*/

    // draw two rectangles (fill)
    ctx.beginPath();
    ctx.fillStyle = "#03A87C"; // fill color
    ctx.rect(100, 100, 200, 200); // x:100, y: 100, w:200, h:200
    ctx.rect(400, 100, 200, 200); // x:400, y: 100, w:200, h:200
    ctx.fill(); // fill previous shapes

    /*----------------------*/

    // draw a rectangle (fill/ transparent)
    // ctx.beginPath();
    // ctx.rect(250, 250, 100, 100); // x:250, y:250, w:100, h:100
    // ctx.fillStyle = "rgba(251, 192, 45, 0.75)"; // fill color
    // ctx.fill(); // fill previous shapes

    /*----------------------*/

    // draw a rectangle (stroke/ transparent)
    // ctx.beginPath();
    // ctx.rect(550, 250, 100, 100); // x:550, y:250, w:100, h:100
    // ctx.strokeStyle = "rgb(216, 67, 21)"; // fill color
    // ctx.stroke(); // stroke previous shapes

    // What if i want to remove a shape from the canvas?
    // canvas is just a single raster image
    // so even if i want to choose a shape or remove it,
    // it's impossible

    // Luckily, canvas API provides me some simple methods
    // to removes pixels from the canvas entirely
    // and if i want to remove rectangular shape
    // i can use clearRect() function

    // here's some example

    /*----------------------*/

    // clear a rectangle (clear/transparent)
    ctx.beginPath();
    ctx.clearRect(150, 150, 100, 100);

    /*----------------------*/

    // draw a rectangle
    ctx.fillStyle = "rgb(216, 67, 21)";
    ctx.fillRect(450, 150, 100, 100); // x: 450, y:150, w:100, h:100
});
