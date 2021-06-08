var dog;
var food;
var foodStock;
var happydog;
var foodS

var database;





function preload(){

Dog=loadImage("images/dogImg.png");
happydog=loadImage("images/dogImg1.png");


}

function setup() {
	createCanvas(500,500);

database=firebase.database();

dog=createSprite(250,250,15,15);
dog.scale=0.3;
dog.addImage(Dog);
//dog.shapeColor="black"
foodStock=database.ref('foodStock/food');
    foodStock.on("value",readStock);

  
}


function draw() {  

background("green");

if(keyWentDown(UP_ARROW)){

writeStocks(foodS);
dog.addImage(happydog);
//dog.shapeColor="red"
}
  drawSprites();

  textSize(20);
  text("note-press up arrow key to feed dog milk", 100, 100);
}
  function readStock(data){

   foodS=data.val(); 
  }
function writeStocks(x){

  database.ref("/").update({
    
  })
}
  
  





