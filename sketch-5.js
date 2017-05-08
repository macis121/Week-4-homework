function setup() {
  createCanvas(400, 400);
  background(0);

  
	for ( var y = 25; y <= 200; y = y + 25) {
    var startX = y;
    var endX = 400 - startX;
    for (var x = startX; x <= endX; x = x + 25)
      ellipse(x,y,15,15);
  
  }
}
