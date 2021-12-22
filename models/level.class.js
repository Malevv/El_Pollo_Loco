class Level {
    enemies;
    cloud;
    backgroundObjects;
    level_end_x = 4900;

    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}