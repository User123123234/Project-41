class Drops{
    constructor(x,y,radius){
    var options = {
    isStatic:false,
    density:1,
    }
    this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
    World.add(world,this.body)
    
    }

    display(){
    var pos = this.body.position;
    if(pos.y>500){
        //pos.y=pos.y-100;
        pos.y=0;
     }
     if(pos.y<0){
        //pos.y=pos.y-100;
        pos.y=0;
     }
    ellipseMode(CENTER);
    fill("lightblue");  
    ellipse(pos.x, pos.y, this.radius);
    }
    }