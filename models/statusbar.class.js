class status extends DrawableObject {

    width = 200;
    height = 50;

    x = 10;
    y = 70;

    IMAGES = [
        'img/7.Marcadores/Barra7Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra7Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra7Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra7Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra7Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra7Marcador vida/azul/100_.png'
    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.IMAGES)
    }

    setpercentage(percentage) {
        this.percentage = percentage;
        this.imagePath = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;

        } else if (this.percentage > 80) {
            return 4;

        } else if (this.percentage > 60) {
            return 3;

        } else if (this.percentage > 40) {
            return 2;

        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }

    }

}
