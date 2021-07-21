(() => {
    const image = new Image();
    image.src = imageArray[0].src;

    image.addEventListener("load", () => {
        const canvas = document.querySelector("#canvas1");
        const context = canvas.getContext("2d");

        canvas.width = 683;
        canvas.height = 1024;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height);

        let particlesArray = [];
        const NUMBER_OF_PARTICLES = 12000;

        let mappedImage = [];

        for (let y = 0; y < canvas.height; y++) {
            let row = [];
            for (let x = 0; x < canvas.width; x++) {
                const red = pixels.data[4 * y * pixels.width + x * 4];
                const green = pixels.data[4 * y * pixels.width + x * 4 + 1];
                const blue = pixels.data[4 * y * pixels.width + x * 4 + 2];
                const brightness = calcRelativeBrightness(red, green, blue);
                const cell = [(cellBrightness = brightness)];
                row.push(cell);
            }
            mappedImage.push(row);
        }

        function calcRelativeBrightness(red, green, blue) {
            return (
                Math.sqrt(
                    red * red * 0.299 +
                        green * green * 0.587 +
                        blue * blue * 0.114
                ) / 100
            );
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = 0;
                this.velocity = Math.random() * 0.5;
                this.size = Math.random() * 1.5 + 1;
                this.positionX = Math.floor(this.y);
                this.positionY = Math.floor(this.x);
            }

            update() {
                this.positionX = Math.floor(this.y);
                this.positionY = Math.floor(this.x);
                this.speed = mappedImage[this.positionX][this.positionY][0];
                let movement = 2.5 - this.speed + this.velocity;

                this.y += movement;
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
