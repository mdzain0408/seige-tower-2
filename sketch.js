
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b12,b34,b56,b78,b90;
var bg = "bg.png";
var backgroundImg;
var score = 0;

function preload()
{
	
	getBackgroundImg()

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;


//first coloumn
b1 = new block(550,350)
b2 = new block(550,370)
b3 = new block(510,370)
b4 = new block(590,370)
b5 = new block(530,390)
b6 = new block(570,390)
b7 = new block(610,390)
b8 = new block(490,390)
b9 = new block(550,410)
b12 = new block(580,410)
b34= new block(620,410)
b56= new block(510,410)
b78= new block(470,410)

//second coloumn
e1= new block(1000,150)
e2= new block(1000,170)
e3= new block(960,170)
e4 = new block(1040,170)
e5= new block(980,190)
e6 = new block(1020,190)
e7 = new block(940,190)
e8 = new block(1060,190)
e9 = new block(1000,210)
e12 = new block(960,210)
e34 = new block(1040,210)
e56 = new block(1080,210)
e78 = new block(919,210)



w1 = new ground(547,428,250,15) 
w2 = new ground(1000,228,250,15) 
 
t2 =new hexag(40,40);


slin = new hexa(t2.body,{x:200,y:450})




mainGround = new ground(700,693,1400,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(0)

  Engine.update(engine)

  

	


	textSize(20)
	text("Score " + score,200,200)

	//console.log(score)

	b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b12.display();
b12.display();
b34.display();
b56.display();
b78.display();



e1.display();
e2.display();
e3.display();
e4.display();
e5.display();
e6.display();
e7.display();
e8.display();
e9.display();
e12.display();
e34.display();
e56.display();
e78.display();

textSize(15)
text("Drag the hexagon to hit",600,50);

w1.display();
w2.display();


t2.display();
slin.display();

mainGround.display();
  drawSprites();
  

	

    
  }

  
  

 



function mouseDragged(){

Matter.Body.setPosition(t2.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

	slin.fly();





}

function  keyPressed(){


if(keyCode === 32){
Matter.Body.setPosition(t2.body,{x:100,y:400})
slin.attach(t2.body);


}

}

async function getBackgroundImg(){

var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJason = await response.json();

var dateTime = responseJason.datetime;
var hour = dateTime.slice(11,13);

if(hour > 00 && hour<12){

bg = "bg1.png"

}else {

	bg = "bg2.png"

}

backgroundImg = loadImage(bg)
console.log(hour);


}