class BackgorundObjeckt extends MovableObject {

    width = 480;
    height = 720;
        
    constructor(imagePath, x){
        super().loadImage(imagePath)
        this.x = x;
        this.y = 480 - this.width;
    }


}