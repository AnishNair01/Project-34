class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2,
            length: 450
        }
        
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(0)
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
           
            
            pop();
        }
    }

    fly() {

        this.rope.bodyA = null;
    
      }
    
}