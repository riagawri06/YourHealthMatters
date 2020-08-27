var form, bg1, bg2, bg3, c = 0
 function preload(){
   bg1 = loadImage('bg6.jpg');
   bg2 = loadImage('Food9.jpg');
   bg3 = loadImage('Breakfast-food-Backgrounds.jpg');
   bg4 = loadImage('bg7.jpg');
 }

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 20);
  form = new Form();
  form.display();
}
function draw(){
if(c === 0){
 background(bg1);
}
if(c === 1){
 background(bg2);
}
if(c === 2){
  background(bg3);
}
if(c === 3){
  background(bg4);
}
}