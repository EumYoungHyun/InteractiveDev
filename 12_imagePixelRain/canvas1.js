(() => {
    const image = new Image();
    image.src = imageArray[0].src;

    image.addEventListener("load", () => {
        const canvas = document.querySelector("#canvas1");
        const context = canvas.getContext("2d");

        canvas.width = 683;
        canvas.height = 1024;

        let particlesArray = [];
        const NUMBER_OF_PARTICLES = 5000;
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.speed = 0;
                this.velocity = Math.random() * 3.5;
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
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }
        function init() {
            for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
                particlesArray.push(new Particle());
            }
        }
        init();

        function animate() {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            context.globalAlpha = 0.05;
            context.fillStyle = "rgb(0, 0, 0)";
            context.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        animate();
    });
})();
