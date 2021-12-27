class MovableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    SpeedY = 0;
    acceleration = 3;
    energy = 100;
    lastHIt= 0;

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
        } else{
            this.lastHIt= new Date().getTime();
        }
    }

    isHurt (){
        let timepassed = new Date().getTime() - this.lastHIt;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;

    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 %(Modulo = Mathematischer Rest) 6; Rest 0 bis 6 => dann wieder 0 unendlich!! 
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