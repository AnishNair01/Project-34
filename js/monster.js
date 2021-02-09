class Monster {
    constructor(x,y,radius){
        var options = {
            restitution:0.8,
            density:1
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.r = radius;
        this.image = loadImage("Monster-01.png")
        this.image1 = loadImage("Monster-02.png")
        World.add(world, this.body);   
        console.log(this.body)
    }

    display(){
        //console.log(this.body)
        var pos1 = this.body.position
        push();
        translate(pos1.x, pos1.y);
        imageMode(CENTER);
        if(this.body.speed<1){
            image(this.image, 0, 0, this.r, this.r);
        }
        else{
            image(this.image1, 0, 0, this.r, this.r);
        }
       
        pop();
    }

}