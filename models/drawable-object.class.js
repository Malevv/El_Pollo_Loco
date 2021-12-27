class DrawableObject {

    x = 10;
    y = 140;
    height = 150;
    width = 100;
    img;
    currentImage = 0;
    imageCache = {};

    
    loadImage(path) {
        this.img = new Image(); //= selbe wie =document.getElementById('image')<img id"=image" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

}