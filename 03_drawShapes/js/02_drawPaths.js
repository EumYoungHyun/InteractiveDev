document.addEventListener("DOMContentLoaded", function () {
    /** @type {HTMLCanvasElement} */
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    /**
     *  The CanvasRenderingContext2D interface gives us
     *  ctx.moveTo() and ctx.lineTo() methods for this.
     *
     *  Think about drawing a straight path on a paper with a pencil.
     *  first, i need to put the pencil on the paper at some location (x,y).
     *  then you need to draw a line from that point to the next location (x,y).
     *  if you need to draw a new line,
     *  i need to repeat these two operations.
     */

    // Before you draw any shape on the canvas,
    // i need to call the beginPath() method. Once i have drawn paths,
    // i can use the fill() and stroke() methods.
    // The fill() operation can only be performed on closed paths
    // such as rectangles or circles.You can use the ctx.closePath() method
    // to close the path instead of using the lineTo() method
    // to draw a line to the first point.

    // If path is not closed, the fill() operation will implicitly
    // call the closePath() method to close the path before performing
    // the filling operation.
    // This however doesn't happen with the stroke() operation

    /*----------------------*/

    // draw rectangle
    ctx.fillStyle = "green"; // fill color
    ctx.beginPath();
    ctx.moveTo(100, 100); // move pen to x:100, y:100
    ctx.lineTo(300, 100); // draw upside line
    ctx.lineTo(300, 300); // draw right side line
    ctx.lineTo(100, 300); // draw down side line
    ctx.lineTo(100, 100); // draw left side line
    // or i can use  ctx.closePath();
    // this means the same as ctx.lineTo(100, 100);
    ctx.fill(); // path is close so, i can use fill method

    // draw triangle
    ctx.fillStyle = "brown"; // fill color
    ctx.beginPath();
    ctx.moveTo(600, 100); // move pen to x:600, y:100
    ctx.lineTo(550, 175); // draw diagonal from top to left
    ctx.lineTo(650, 175); // draw diagonal from left to right
    ctx.closePath(); // draw diagonal from right to up
    ctx.fill();

    // draw another triangle
    ctx.lineWidth = 10; // line width in pixels
    ctx.lineCap = "round"; // style end of a line
    ctx.lineJoin = "bevel"; // style edge
    ctx.beginPath();
    ctx.moveTo(600, 200);
    ctx.lineTo(550, 275);
    ctx.lineTo(650, 275);
    ctx.closePath();
    ctx.stroke();
});
