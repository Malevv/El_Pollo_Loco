class cloud extends MovableObject {
    y = -10;
    width = 600;
    height = 350;
    speed = 0.5;


    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.x = x;
        this.x = x + Math.random() * 800; // = Zahl zwischen 200 & 700, Math.random() ist eine Zahl zwischen 0 -1 zb. 0,23//
        this.animate();
    }
    

    animate() { setInterval(() => {
        this.x -= this.speed;
    }, 50);
        
    }

}