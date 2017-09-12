function setup() {
	createCanvas(640, 480);
}

function draw() {
	if (mouseIsPressed) {
		fill(232,238,94);
		triangle(mouseX, mouseY, mouseX+10, mouseY+20, mouseX+20, mouseY);
	}
}