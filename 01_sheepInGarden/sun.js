export class Sun {
    constructor() {
        this.radius = 80;

        this.total = 80;
        this.gap = 1 / this.total;
        this.originPos = [];
        this.pos = [];
        for (let i = 0; i < this.total; i++) {
            const pos = this.getCirclePoint(this.radius, this.gap * i);
            this.originPos[i] = pos;
            this.pos[i] = pos;
        }

        this.fps = 30;
        this.fpsTime = 1000 / this.fps;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.x = this.stageWidth - this.radius - 50;
        this.y = this.stageHeight / 5;
    }

    draw(ctx, t) {
        if (!this.time) {
            this.time = t;
        }
        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.updatePoint();
        }

        ctx.fillStyle = "#ffb200";
        ctx.beginPath();

        let pos = this.pos[0];
        ctx.moveTo(pos.x + this.x, pos.y + this.y);
        for (let i = 1; i < this.total; i++) {
            const pos = this.pos[i];
            ctx.lineTo(pos.x + this.x, pos.y + this.y);
        }
        ctx.fill();
    }
    drawFace(ctx) {
        ctx.fillStyle = "#5a4435";
        ctx.beginPath();
        ctx.filter = "blur(2px)";
        ctx.arc(
            this.x,
            this.y + this.radius * 0.2,
            this.radius / 1.5,
            0,
            2 * Math.PI
        );
        ctx.fill();
    }

    updatePoint() {
        for (let i = 1; i < this.total; i++) {
            const pos = this.originPos[i];
            this.pos[i] = {
                x: pos.x + this.ranInt(7),
                y: pos.y + this.ranInt(7),
            };
        }
    }

    ranInt(max) {
        return Math.random() * max;
    }

    getCirclePoint(radius, t) {
        const theta = Math.PI * 2 * t;

        return {
            x: Math.cos(theta) * radius,
            y: Math.sin(theta) * radius,
        };
    }
}
