var canvas,database,form,voter,game,bgimage;
var gameState = 0;
var voterCount;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   
}