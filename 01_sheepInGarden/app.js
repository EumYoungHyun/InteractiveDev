import { Hill } from "./hill.js";
import { Sun } from "./sun.js";

class App {
    constructor() {
        /**
         * canvas 생성 및 body에 추가
         */
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.sun = new Sun();

        this.hills = [
            new Hill("#2A120A", 0.1, 5),
            new Hill("#191007", 0.3, 4),
            new Hill("#181907", 0.8, 3),
        ];
        /**
         * 스크린 사이즈를 가져오기 위해 resize 이벤트를 설정
         */
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        /**
         * canvas를 두배로 해서
         * Retina Display 에서도 선명하게 보이도록 제작
         */
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.sun.resize(this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }
    }
    animate(t) {
        requestAnimationFrame(this.animate.bind(this));
        /**
         * canvas를 깨끗하게 지워주는 코드를 추가
         */
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.sun.draw(this.ctx, t);
        this.sun.drawFace(this.ctx);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);
        }
    }
}

window.onload = () => {
    new App();
};
