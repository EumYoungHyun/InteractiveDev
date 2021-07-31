import WebFont from 'webfontloader';

class App {
    constructor() {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Droid Serif']
            },
            fontactive: () => {

            }
        });
    }
}

window.onload = () => {
    new App();
}