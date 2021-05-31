class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:25
        }
        this.pointB = pointB
        this.paper = Constraint.create(options);
        World.add(world, this.paper);
    }

    fly(){
        this.paper.bodyA = null;
    }

    display(){
        if(this.paper.bodyA){
            var pointA = this.paper.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x < 220){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
               
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
               
            }
            
        }
    }
    
}