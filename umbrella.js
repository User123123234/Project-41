class Picture{
    constructor(x,y,radius){
    var options = {
    isStatic:true,
    density:1,
    restitution:0.2 
    }
this.body = Bodies.circle(x,y,radius,options)
this.radius=radius

//loading the image
this.image= loadImage('images/walking/walking1.png')

    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    //imageMode(CENTER)
  imageMode(CENTER)
    fill("blue");  
    //image
    image(this.image, pos.x, pos.y, 200,200);
    }
    }