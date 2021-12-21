class MovableObject {
    x = 10;
    y = 140;
    img;
    height = 150;
    width = 100;

    currentImage = 0;
    speed = 0.15;

    imageCache = {};


    loadImage(path) {
        this.img = new Image(); //= selbe wie =document.getElementById('image')<img id"=image" src>
        this.img.src = path;
    }


      /**
       * 
       * @param {array} arr - ['img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png']
       *  */  
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}