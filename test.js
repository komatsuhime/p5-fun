var r;
var g;
var b;
var i = 0;

function setup() {
    createCanvas(640, 480);
    r = random(256);
    g = random(256);
    b = random(256);

    background(0, 0, 0);

}

function draw() {

    if (mouseIsPressed) {
        fill(r, g, b);
        noStroke();
        triangle(mouseX, mouseY, mouseX + 10, mouseY + 20, mouseX + 20, mouseY);
    }

    i++;
    if (i < 100) {
        stroke(255, 255, 255);
        fill(255, 255, 255);
        point(random(641), random(481));
        ellipse(random(641), random(481), random(5));
    }

}