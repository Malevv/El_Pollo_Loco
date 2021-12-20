class MovableObject {
    x = 10;
    y = 140;
    img;
    height = 150;
    width = 100;


    loadImage(path) {
        this.img = new Image(); //= selbe wie =document.getElementById('image')<img id"=image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }
    
    moveLeft() {
        
    }
}