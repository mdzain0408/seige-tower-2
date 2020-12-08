class ground{



constructor(x,y,width,height){
  this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
  this.width = 250;
  this.height = 15;
  World.add(world,this.body);




}


display(){

var pos = this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)

}




}