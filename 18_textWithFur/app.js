import { Text } from './test.js'
class App {
    constructor() {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Droid Serif']
            },
            fontactive: () => {
                this.text = new Text();
                this.text.setText(
                    'A', 2,
                    document.body.clientWidth,
                    document.body.clientHeight
                )
            }
        });
    }
}

window.onload = () => {
    new App();
}