class block{

constructor(x,y){

    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }


this.body = Bodies.rectangle(x,y,40,20,options);
this.width = 40;
this.height = 20;
this.Visiblity = 255
World.add(world,this.body)



}


display(){

    var pos = this.body.position;

    if(this.body.speed<5){
      
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        

    }else{

        World.remove(world, this.body);
        
        push();
        this.Visiblity = this.Visiblity - 5;
        //tint(255,this.Visiblity);
        //rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();


    }

    if (this.Visiblity < 200 && this.Visiblity>50){

        score++;
        //console.log(score)

    }







}




}