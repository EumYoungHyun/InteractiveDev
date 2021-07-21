(() => {
    const image = new Image();
    image.src = imageArray[0].src;

    image.addEventListener("load", () => {
        const canvas = document.querySelector("#canvas1");
        const context = canvas.getContext("2d");

        canvas.width = 683;
        canvas.height = 1024;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        let particlesArray = [];
        const NUMBER_OF_PARTICLES = 5000;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.speed = 0;
                this.velocity = Math.random() * 0.5;
                this.size = Math.random() * 1.5 + 1;
            }

            update() {
                this.y += this.velocity;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                context.beginPath();
                context.fillStyle = "white";
                context.arc(this.x, this.y, this.size, 0, Math.Pi * 2);
            }
        }
    });
})();
