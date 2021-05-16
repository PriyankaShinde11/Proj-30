class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
         
        this.pointB = pointB

        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

   attach(bodyA){
        this.polygon.bodyA = bodyA;
            }

    display(){


       
      
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            //push();
            strokeWeight(5);
            stroke(48,22,8);
            
            line(pointA.x,pointA.y,pointB.x,pointB.y);

           // imageMode(CENTER);
        //image(this.image, 0, 0,10, 20);
            
            //pop();
        }

    }
    
}