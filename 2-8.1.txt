
Homework week 4-1

function setup() { 
  createCanvas(400,400);
   
} 

function draw() {
 background (0);
  
 for (var x=10; x<400; x=x+20){
	 y=x;
	 ellipse (x, y, 25, 25);
 }
}
