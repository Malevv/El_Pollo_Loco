class Chicken extends MovableObject {
    width = 70;
    height = 80;
    y = 360;

    constructor(){
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
   
        this.x = 200 + Math.random() *500; // = Zahl zwischen 200 & 700, Math.random() ist eine Zahl zwischen 0 -1 zb. 0,23//
    }
}