function setup() { 
  createCanvas(400, 400);
	background(0);
}
function draw() {
  background(0);
	for(var x=20;x<=380;x+=20){
      line(x,20,20,x);
			var y = x;
   stroke(255);
      line(380,y,x,380);  
			
    }
 }
