class cloud extends MovableObject {
    y = -10;
    width = 600;
    height = 350;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png')

        this.x = Math.random() * 800; // = Zahl zwischen 200 & 700, Math.random() ist eine Zahl zwischen 0 -1 zb. 0,23//
        this.animate();
    }
    

    animate() {
        this.moveLeft();
    }

}