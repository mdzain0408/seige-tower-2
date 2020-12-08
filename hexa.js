class hexag{

constructor(x,y){

    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.5
    }


    this.body = Bodies.rectangle(x,y,40,20,options);
    this.width = 40;
    this.height = 20;
    this.image = loadImage("POLY.png")
    World.add(world,this.body)


}

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height)
    



}
}