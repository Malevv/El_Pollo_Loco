class Chicken extends MovableObject {
    width = 70;
    height = 80;
    y = 350;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // = Zahl zwischen 200 & 700, Math.random() ist eine Zahl zwischen 0 -1 zb. 0,23//
        this.speed = 0.15 + Math.random() * 0.5;
        
        this.animate();

    }
    


    animate() {
        setInterval(() => {
            this.moveLeft();
            this.speed = 0.01;
            this.otherDirection = false;
        }, 1000 / 60);
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }
}
