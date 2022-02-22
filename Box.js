class Box{
    constructor(x,y,width,height){
    var options = {
        'isStatic': false,
        'friction' : 1.0,
        'restitution': 0.8,
        'density': 0.04
     }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
}