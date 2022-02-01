// Variable pour abriter mon mp3
let robot ;

// Variable pour l'image
let visuel ;


// Variable pour contenir la valeur du volume sonore
let volumeson ;

function preload() {
robot = loadSound("robot.mp3");
pixel = loadFont("VPPixel.otf");
visuel = loadImage('robot.png');
}

var ranges = 100;

function setup() {
  createCanvas(640, 960);
  background(200);

// Instancier l'analyseur sonore
volumeson = new p5.Amplitude() ;
  
// Lancer le Mp3
robot.play() ;
// seb.loop() ; 
}

function draw() {
  
  // Je récupère le niveau sonore
  var niveau = volumeson.getLevel();
  print (niveau) ;
  
  if (niveau > 0.20) {
  background(196,26,52);
  }
  else {
  background(0);
  }
  
  noFill();
  strokeWeight(0.2);

  for (var i = 0; i < ranges; i++) {
    var pavar = map(i, 0, ranges, 0, 255);
    stroke(pavar);
    
    beginShape();
    for (var x = -10; x < width + 200; x += 20) {
      var n = noise(x * niveau, i * 0.9, niveau * 0.05);
      var y = map(n, 0, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
  
  image(visuel,170,365,300,218);
  
  //typographie
  fill(255);
  //textSize(95);
  textFont(pixel, 20);
  text('KRAFTWERK', 260, 860);
  text('THE ROBOTS', 256, 885);
  
}