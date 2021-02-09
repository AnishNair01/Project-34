const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 


var backgroundImg,monsterImg1,monsterImg2,superheroImg1,monster;
var hero,ground,rope1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")


}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(1000,500,500)
  ground = new Ground(600,600,1200,10)
  rope1 = new Fly(hero.body,{x:400,y:50})
  box1 = new Box(700,500,50,50)
  box2 = new Box(700,480,50,50)
  box3 = new Box(700,460,50,50)
  box4 = new Box(700,440,50,50)
  box5 = new Box(800,500,50,50)
  box6 = new Box(800,480,50,50)
  box7 = new Box(800,460,50,50)
  box8 = new Box(800,440,50,50)
  box9 = new Box(900,500,50,50)
  box10 = new Box(900,480,50,50)
  box11 = new Box(900,460,50,50)
  box12 = new Box(900,440,50,50)

  monster = new Monster(1000,550,300)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)
  hero.display()
  ground.display()
  rope1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  monster.display()

}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}

