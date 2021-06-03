var dog,happyDog;
var database;
var Food,stockFood;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {

  database=firebase.database();
  createCanvas(500, 500);

   dog=createSprite(250,300,150,150);
   dog.addImage(dogImg);
   dog.scale=0.15;

   foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 

  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();
  
text("Note:Press UP_ARROW Key To Feed Drago Milk",130,10,300,20);
textSize(5                                                                                                                                                                                                                                                                                                                                                                                                                                                              );

}

function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}

