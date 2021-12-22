class Character extends MovableObject {
    height = 350;
    width = 180;

    y = 90;


    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    world;
    walkin_sound = new Audio('audio/laufen.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);
        

        this.animate();
    }

    animate() {

        setInterval(() => {
                this.walkin_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed * 35;
                this.otherDirection = false;
                this.walkin_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > -500) {
                this.x -= this.speed * 35;
                this.otherDirection = true;
                this.walkin_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 %(Modulo = Mathematischer Rest) 6; Rest 0 bis 6 => dann wieder 0 unendlich!! 
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 90);
    }

    jump() {

    }
}

