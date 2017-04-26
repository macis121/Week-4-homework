Homework week 4 -2

function setup() {
	createCanvas(400, 400);

}

function draw() {
	background(0);
	for (var x = 10; x < 400; x = x + 30) {


		for (var y = 10; y < 400; y = y + 30) {
			ellipse(x, y, 25, 25);

		}
	}
}
