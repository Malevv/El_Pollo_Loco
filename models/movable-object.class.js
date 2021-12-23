class MovableObject {
    x = 10;
    y = 140;
    img;
    height = 150;
    width = 100;

    currentImage = 0;
    speed = 0.15;

    imageCache = {};

    otherDirection = false;

    SpeedY = 0;
    acceleration = 3;

    energy = 100;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.SpeedY > 0) {
                this.y -= this.SpeedY;
                this.SpeedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        return this.y < 75;
    }


    loadImage(path) {
        this.img = new Image(); //= selbe wie =document.getElementById('image')<img id"=image" src>
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'purple';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }
    // Chickenkollision
    isColliding(mo) {
        return this.x +this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 %(Modulo = Mathematischer Rest) 6; Rest 0 bis 6 => dann wieder 0 unendlich!! 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    moveRight() {
        this.x += this.speed * 35;
        this.otherDirection = false;
        
    }

    moveLeft() {
        this.x -= this.speed * 35;
        this.otherDirection = true;

    }

    jump() {
        this.SpeedY = 25;
    }
}