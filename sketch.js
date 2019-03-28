let keyboard;

function setup() {
  createCanvas(801, 501);
  background(0, 0, 0);
  keyboard = new p5.Oscillator('square');

  // c = new p5.Oscillator(130, 'square');
  // d = new p5.Oscillator(140, 'square');
  // e = new p5.Oscillator(160, 'square');
  // f = new p5.Oscillator(170, 'square');
  // g = new p5.Oscillator(190, 'square');
  // a = new p5.Oscillator(210, 'square');
  // b = new p5.Oscillator(230, 'square');
  // highc = new p5.Oscillator(250, 'square');
  // c# = new p5.Oscillator(260, 'square');
  // d# = new p5.Oscillator(140, 'square');
  // f# = new p5.Oscillator(140, 'square');
  // g# = new p5.Oscillator(140, 'square');
  // a# = new p5.Oscillator(140, 'square');

}

function draw() {
  fill(255);
  rect(0, 0, 100, 500);
  rect(100, 0, 100, 500);
  rect(200, 0, 100, 500);
  rect(300, 0, 100, 500);
  rect(400, 0, 100, 500);
  rect(500, 0, 100, 500);
  rect(600, 0, 100, 500);
  rect(700, 0, 100, 500);
  rect(800, 0, 100, 500);

  //black keys
  fill(0);
  rect(60, 0, 80, 250);
  rect(160, 0, 80, 250);
  rect(360, 0, 80, 250);
  rect(460, 0, 80, 250);
  rect(560, 0, 80, 250);

  if (mouseIsPressed && mouseX >= 0 && mouseX < 100 && mouseY <= 500 && mouseY >= 250) {
    //C
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(130);
  } else if (mouseIsPressed && mouseX >= 100 && mouseX < 200 && mouseY <= 500 && mouseY >= 250) {
    //D
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(145);
  } else if (mouseIsPressed && mouseX >= 200 && mouseX < 300 && mouseY <= 500 && mouseY >= 250) {
    //E
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(160);
  } else if (mouseIsPressed && mouseX >= 300 && mouseX < 400 && mouseY <= 500 && mouseY >= 250) {
    //F
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(170);
  } else if (mouseIsPressed && mouseX >= 400 && mouseX < 500 && mouseY <= 500 && mouseY >= 250) {
    //G
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(190);
  } else if (mouseIsPressed && mouseX >= 500 && mouseX < 600 && mouseY <= 500 && mouseY >= 250) {
    //A
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(215);
  } else if (mouseIsPressed && mouseX >= 600 && mouseX < 700 && mouseY <= 500 && mouseY >= 250) {
    //B
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(240);
  } else if (mouseIsPressed && mouseX >= 700 && mouseX < 800 && mouseY <= 500 && mouseY >= 250) {
    //High C
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(255);
  } else if (mouseIsPressed && mouseX >= 60 && mouseX < 140 && mouseY <= 250 && mouseY >= 0) {
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(140);
  } else if (mouseIsPressed && mouseX >= 160 && mouseX < 240 && mouseY <= 250 && mouseY >= 0) {
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(150);
  } else if (mouseIsPressed && mouseX >= 360 && mouseX < 440 && mouseY <= 250 && mouseY >= 0) {
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(180);
  } else if (mouseIsPressed && mouseX >= 460 && mouseX < 540 && mouseY <= 250 && mouseY >= 0) {
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(200);
  } else if (mouseIsPressed && mouseX >= 560 && mouseX < 640 && mouseY <= 250 && mouseY >= 0) {
    keyboard.start();
    keyboard.amp(.05);
    keyboard.freq(230);
  }
}

function mousePressed() {
  keyboard.stop();
}
