Homework week 4-3

function setup() {
	createCanvas(400, 400);

}

function draw() {
	background(0);
	for (var x = 10; x < 400; x = x + 25) {


		for (var y = 10; y < 400; y = y + 25) {
			ellipse(x, y, 25, 25);
fill (random (255), 0, random (255)); 
			ellipse (x, y, 25, 25);
			
		}
	}
}
