var r;
var g;
var b;

function setup() {
    createCanvas(640, 480);
    r = random(256);
    g = random(256);
    b = random(256);
}

function draw() {
    if (mouseIsPressed) {
        fill(r, g, b);
        noStroke();
        triangle(mouseX, mouseY, mouseX + 10, mouseY + 20, mouseX + 20, mouseY);
    }
}