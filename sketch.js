const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,pig1,pig2,pig3,pig4,pig5;
var backgroundImg,platform;
var bird, slingShot;
var box6,box7;
var log1,log2,log3,log4,log5,log6;
var score = 0;
                                                                                                                                                
function preload() {
    backgroundImg = loadImage("sprites/school.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);
    pig3 = new Pig(810, 130);
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(700,160,70,70);
     box6 = new Box(920,160,70,70);
    box7 = new Box(810,50,70,70);
    log4 = new Log(810,100,300, PI/2);
    log5 = new Log(760,45,150, PI/7);
   log6 = new Log(870,45,150, -PI/7);
   pig4 = new Pig(620,350);
   pig5 = new Pig(990,350);

    bird = new Bird(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    box6.display();
    log4.display();
    box7.display()
    log5.display();
    log6.display();
    pig3.display();
    pig4.display();
    pig5.display();
    bird.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingshot.attach(bird.body);  
    }
}