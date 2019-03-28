let c;
let d;
let e;
let f;
let g;
let a;
let b;
let highc;

let c#;
let d#;
let f#;
let g#;
let a#;

let keyboard;

function setup(){
    createCanvas(801, 501);
    background(0, 0, 0);

    //white keys
    keyboard.freq(10);
    c = rect(0, 0, 100, 500);
    d = rect(100, 0, 100, 500);
    e = rect(200, 0, 100, 500);
    f = rect(300, 0, 100, 500);
    g = rect(400, 0, 100, 500);
    a = rect(500, 0, 100, 500);
    b = rect(600, 0, 100, 500);
    highc = rect(700, 0, 100, 500);

    //black keys
    fill(0);
    c# = rect(60, 0, 80, 250);
    d# = rect(160, 0, 80, 250);
    f# = rect(360, 0, 80, 250);
    g# = rect(460, 0, 80, 250);
    a# = rect(560, 0, 80, 250);

    //keyboard = new p5.Oscillator("square");
}

function draw(){



}

function mouseDragged(){
  keyboard.start();
}

function mouseReleased(){
  keyboard.stop();
}
