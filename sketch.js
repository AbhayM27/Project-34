//Create variables here
var dog, happyDog, database, foodS, foodStock; 
function preload()
{
  //load images here
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database(); 
  console.log(database);
  dogSprite = createSprite(250,250,50,50);
  dogSprite.addImage(dog);
  dog.resize(100,100);
  happyDog.resize(100,100);
  
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock); 
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)) {
writeStock(foodS);
dogSprite.addImage(happyDog);


}


  drawSprites();
  
  textSize(50);
  fill("black");
  text("Food Remaining " + foodS,40,80);
  textSize(20);
  text("Press UP_ARROW key to give Dog food",80,400);
}

function readStock(data) {
  foodS=data.val();




}

function writeStock(x) {

  if(x<=0) {
    x=0;
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })


}



