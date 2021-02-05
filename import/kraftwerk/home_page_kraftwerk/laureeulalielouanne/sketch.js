/* Artiste : Kraftwerk */
/* Titre : Computer love */
/* Poster réalisé par : Laure, Louanne et Eulalie, DNMADE 1 */
/* Date : 25 Juin, 2020 */


// Variable pour abriter mon mp3
let love ;

// Variables pour contenir la valeur du volume sonore
let volumeson ;
let niveau ;

let kMax; // Maximal value for the parameter "k" of the blobs
let step = 0.01; // Difference in time between two consecutive blobs
let n = 30; // Total number of blobs
let radius = 0; // Radius of the base circle
let inter = 0.1; // Difference of base radii of two consecutive blobs
let maxNoise = 400; // Maximal value for the parameter "noisiness" for the blobs

// let noiseProg = (x) => (x);

function preload() {
love = loadSound("love.mp3");
  
krona = loadFont("KronaOne-Regular.ttf");

}

function setup() {
  createCanvas(640, 960);
  grille = loadImage('grille.png');

  // Instancier l'analyseur sonore
  volumeson = new p5.Amplitude() ;
  
  // Lancer le Mp3
  love.play() ;

  colorMode(HSB, 1,56,15);
  angleMode(DEGREES);
  noFill();

  kMax = random(0.6, 0.3);
  noStroke();
}



function draw() {
  background(180, 87, 58);
  background(grille);
  
  fill(255);
  textSize(30);
  textFont(krona);
  text('KRAFTWERK', 20, 55);
  
  angleMode(DEGREES);
  textSize(30);
  rotate(90.0);
  text('COMPUTER LOVE', 80, -593);
  
  rotate(90.0);
  textSize(30);
  text('KRAFTWERK', -585,-850);
  
  rotate(90.0);
  textSize(30);
  text('COMPUTER LOVE', -885, 40);
  
  rotate(90.0);
  
  // Récupérer le niveau sonore
  niveau = volumeson.getLevel();
 
  let t = frameCount/50;
  for (let i = n; i > 0; i--) {
      let alpha = 1 - (i / n);
      fill((alpha/5 + 0.75)%1, 1, 1, alpha);
      //let size = radius + i * inter;
      let size = map(niveau,0,1,0,400) + i * inter;
      let k = kMax * sqrt(i/n);
       let noisiness = maxNoise * (i / n);
      //let noisiness = map(niveau, 0, 1, 200, 550) ;
  blob(size, width/2, height/2, k, t - i * step, noisiness);
  }
  
} // Fermeture de draw


// Creates and draws a blob
// size is the radius (before noise) of the base circle
// (xCenter, yCenter) is the position of the center of the blob
// k is the tightness of the blob (0 = perfect circle, higher = more spiky)
// t is the time
// noisiness is the magnitude of the noise (i.e. how far it streches out)
function blob(size, xCenter, yCenter, k, t, noisiness) {
beginShape();
let angleStep = 590 / 58;
  
  for (let theta = 10; theta <= 660 + 200 * angleStep; theta += angleStep) {
  
  let r1, r2;
    
    r1 = cos(theta)+1;
    r2 = sin(theta)+1; // +1 because it has to be positive for the function noise
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }

endShape();
}
