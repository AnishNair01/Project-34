class Hero {
    constructor(x,y,radius){
        var options = {
            frictionAir:0.00001,
            density:1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.r = radius;
        this.image = loadImage("Superhero-01.png")
        World.add(world, this.body);   
    }

    display(){

        var pos1 = this.body.position
        push();
        translate(pos1.x, pos1.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);

        pop();
    }

}