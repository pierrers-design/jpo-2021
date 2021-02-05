//Initilalisation Rain ----------------------------------------------------------------

let night

let music;
let vol;

let x = 0;
let y = 0;
let w = 0;
let h = 0;

let pluiex = 0;
let pluiey = 0;

let min_width = 5;
let max_width = 0;

let tabx = [];
let taby = [];

let tabsave = [];


//Initilalisation Cubes ----------------------------------------------------------------

let cubex = 0;
let cubey = 0;

let littlex = 0;
let littley = 0;

let mediumx = 0;
let mediumy = 0;


//Initilalisation Texte ----------------------------------------------------------------

let liquorstore;

let neon = "NEON";
let light = "LIGHTS";

let clignoN = 0;

let clignoL = 0;


//Preload All -----------------------------------------------------------------------

function preload(){
  night = loadImage('nightcraft.jpg');
  music = loadSound('Neon_Lights.mp3');
  liquorstore = loadFont("Liquorstore.ttf");
}

function setup() {
  createCanvas(640, 960);
  noStroke();
  
  music.play();
  vol = new p5.Amplitude();
  

//Setup Rain -----------------------------------------------------------------------
  
  for(let i = 0; i < 10; i++){
    
    max_width += 58;
    
    taby[i] = random(-1200,-100);
    
    tabx[i] = random(min_width, max_width);
    
    tabsave[i] = tabx[i];
    
    min_width += 60;
  }
  
  
//Setup Texte -----------------------------------------------------------------------
  
  textFont(liquorstore);
  textSize(80);
}

function draw() {
  
  tint(255, 80); // Cubes
  image(night,0,0,width,height);
  
  let niveau = vol.getLevel();  
  
  
//Draw Texte ----------------------------------------------------------------------- 
  
  clignoN = random(0,10);
  clignoL = random(0,10);
  
  if(clignoN > 0.4){
  fill(255);
  text(neon, 20, 80);
  }

  if(clignoL > 0.5){
  fill(255);
  text(light, 20, 150);
  }
  
  
//Draw Rain ----------------------------------------------------------------------- 

  for(let j = 0; j < 10; j++){

    glowRect(tabx[j], taby[j], 20, 70);  
      
    let speed = map(niveau, 0, 1, random(5,15), random(50,150));
      
    if(taby[j] > height){
      taby[j] = -100;
      tabx[j] = random((tabsave[j]-40),(tabsave[j]+40));
    }
    taby[j] += speed;
  }
  
 
//Draw Cubes ----------------------------------------------------------------------- 
  
  cubex = random(width-140);
  cubey = random(height-140);
  
  littlex = cubex+110;
  littley = cubey+110;
  
  mediumx = cubex+60;
  mediumy = cubey+60;
  
  if(0.16 <= niveau < 0.2){
      fill('rgba(161,26,46, 1)');
      rect(littlex,littley,30,30);    
  }
  else if(0.22 <= niveau < 0.28){ 
      fill('rgba(161,26,46, 1)');
      rect(mediumx+25,mediumy+25,30,30);   
    
      fill('rgba(161,26,46, 0.7)');
      rect(mediumx,mediumy,80,80);   
  }
  else if(niveau >= 0.28){
      fill('rgba(161,26,46, 1)');
      rect(cubex+55,cubey+55,30,30);   
    
      fill('rgba(161,26,46, 0.7)');
      rect(cubex+30,cubey+30,80,80);   

      fill('rgba(161,26,46, 0.4)');
      rect(cubex,cubey,140,140);
  }
  
}


//Fonction Rain ----------------------------------------------------------------------- 

function glowRect(x, y, w, h){
  
  let fillColor = color('#C41A34');
  let glowColor = color('rgba(196,26,52,0.05)');
  
  stroke(glowColor);
  strokeWeight(4);
  rect(x,y,w,h);
  
  stroke(glowColor);
  strokeWeight(8);
  rect(x,y,w,h);
  
  stroke(glowColor);
  strokeWeight(12);
  rect(x,y,w,h);
  
  stroke(glowColor);
  strokeWeight(16);
  rect(x,y,w,h);
  
  stroke(glowColor);
  strokeWeight(20);
  rect(x,y,w,h);

  stroke(glowColor);
  strokeWeight(24);
  rect(x,y,w,h);
  
  noStroke();
  fill(fillColor);
  rect(x,y,w,h);
}