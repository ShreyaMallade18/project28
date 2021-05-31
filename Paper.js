class Paper{
    constructor(x,y,width,height){
        var options = {
             isStatic: true,
            'restitution':0.3,
            'friction':0.5,
            'density': 1.2,  
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

       

    }

    display(){
       imageMode(CENTER);

        fill("yellow");

        image(this.image,this.body.position.x, this.body.position.y, this.width,this.height);




    }
};