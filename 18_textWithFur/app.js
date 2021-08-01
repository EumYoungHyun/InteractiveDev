import { Visual } from './visual.js' 
import { setColor } from './color.js' 
import { Text } from './test.js' 

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.thumbs = [];


        WebFont.load({
            google: {
                families: ['Droid Sans', 'Droid Serif']
            },
            fontactive: () => {
                const ul = document.querySelector('ul')[0];
                const lis = ul.getElementsByTagName('li');
                for (let i = 0; i < lis.length; i++) {
                    const item = lis[i];
                    const img = item.getElementsByTagName('img')[0]
                    item.addEventListener('click', () => {
                      this.show(i);
                    }, false);

                    this.thumbs[i] = {
                        item,
                        img: img.src
                    }
                }

                this.text = new Text();

                window.addEventListener('resize', this.resize.bind(this), false);
                trhis.resize();

                requestAnimationFrame(this.animate.bind(this));
            }
        });
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.pos = this.text.setText('M', 6, this.stageWidth, this.stageHeight);
    }
}

window.onload = () => {
    new App();
}