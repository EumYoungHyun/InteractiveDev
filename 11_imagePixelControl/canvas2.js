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
        mouse.x = event.x - canvas.offsetLeft;
        mouse.y = event.y - canvas.offsetTop;
    });

    function drawImage() {
        let imageWidth = png.width;
        let imageHeight = png.height;
        const data = context.getImageData(0, 0, imageWidth, imageHeight);
        context.clearRect(0, 0, canvas.width, canvas.height);

        class Particle {
            constructor(x, y, color, size) {
                this.x = x + canvas.width / 2 - png.width * 2;
                this.y = y + canvas.height / 2 - png.height * 2;
                this.color = color;
                this.size = size || 2;
                this.baseX = x + canvas.width / 2 - png.width * 2;
                this.baseY = y + canvas.height / 2 - png.height * 2;
                this.density = Math.random() * 10 + 2;
            }
            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }
            update() {
                context.fillStyle = this.color;

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                const maxDistance = 100;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;

                let directionX = forceDirectionX * force * this.density * 0.6;
                let directionY = forceDirectionY * force * this.density * 0.6;

                if (distance < mouse.radius + this.size) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 20;
                    } else if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 20;
                    }
                }
                this.draw();
            }
        }
        function init() {
            particleArray = [];
            for (let y = 0, y2 = data.height; y < y2; y++) {
                for (let x = 0, x2 = data.width; x < x2; x++) {
                    if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
                        let positionX = x;
                        let positionY = y;
                        let color =
                            "rgb(" +
                            data.data[y * 4 * data.width + x * 4] +
                            "," +
                            data.data[y * 4 * data.width + x * 4 + 1] +
                            "," +
                            data.data[y * 4 * data.width + x * 4 + 2] +
                            ")";
                        particleArray.push(
                            new Particle(positionX * 4, positionY * 4, color)
                        );
                    }
                }
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            context.fillStyle = "rgba(0,0,0,0.05)";
            context.fillRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
            }
        }
        init();
        animate();

        window.addEventListener("resize", () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });
    }
    const png = new Image();
    png.src = image2[0].src;

    window.addEventListener("load", () => {
        context.drawImage(png, 0, 0);
        drawImage();
    });
})();
