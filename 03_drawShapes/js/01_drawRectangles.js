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

    // And canvas gives me moveTo() and lineTo functions
    // to help perform the above actions.
    /*----------------------*/
});
