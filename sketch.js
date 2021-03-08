const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const World = Matter.World;

var backGroundImage;
var hero,heroImage,heroAnimation;
var monster,monsterImage,monsterAnimation;
var ground;
var restBox;
var boxArray1 = [];
var boxArray2= [];
var rope;
function preload() {
//preload the images here
backGroundImage = loadImage("GamingBackground.png");
heroAnimation = loadAnimation("SuperHero-01.png","SuperHero-02.png");
monsterAnimation = loadAnimation("Monster-01.png","Monster-02.png");
}

function setup() {
  createCanvas(1667, 833);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200,200,260,30);

  monster = new Monster(950,220,40,80);

  restBox = new Ground(monster.body.position.x,280,10,10)

  ground = new Ground(width/2-600,height - 200,width-400,10);

  //rope = new Rope({X:200,y:100},hero.body)

  var pos = hero.body.position;
  heroImage = createSprite(pos.x,pos.y,20,20);
  heroImage.addAnimation("animation",heroAnimation);
  heroImage.scale = 0.16;

  var pos2 = monster.body.position;
  monsterImage = createSprite(pos2.x,pos2.y,20,20);
  monsterImage.addAnimation("animation",monsterAnimation);
  monsterImage.scale = 0.2;

 
   
      for(var i = 0; i < 480; i=i+80){
      boxArray1.push( new Box( 660, 185+i,80,80))
      }
      for(var i = 0; i < 560; i=i+80){
      boxArray2.push( new Box(775, 105+i,80,80))
      }
    
  

  

 
}

function draw() {
  background(backGroundImage);
  Engine.update(engine);
  var pos = hero.body.position;
  heroImage.x = pos.x ;
  heroImage.y = pos.y ;

  var pos2 = monster.body.position;
  monsterImage.x = pos2.x ;
  monsterImage.y = pos2.y ;

  ground.display();
  //hero.display();
  //monster.display();
  //rope.display();
  //restBox.display();
  
    for(var j = 0; j < boxArray1.length; j++){
      boxArray1[j].display();
    }
    for(var i = 0; i < boxArray2.length; i++){
      boxArray2[i].display()
    }
console.log(mouseX,mouseY);

if(mouseDown("leftButton")){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
  drawSprites();

}


