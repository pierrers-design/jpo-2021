//variable pour l'image
let nuage ;

//déclarer une variable pour police de caractère
let font ;

//Variable pour abriter mon mp3
let musique ;

//Variable pour contenir la valeur du volume sonore
let volumeson ;

//Variable de temps de départ
let temps = 0 ;

//variable de pas à pas qui détermine le nombre d'ellipses
let step = 0.1 ;

function preload() {
nuage = loadImage ('nuage.png');
font = loadFont("SHPinscher-Regular.otf");
musique = loadSound("Radioactivity_compresse.mp3");
}


//particules
var dotsX = [];
var dotsY = [];
var dotsR = [];

function setup() {
createCanvas(640, 960);

background(100);


for(var i=0; i<500; i++){ // nombre de particules
dotsX[i] = random(windowWidth);
dotsY[i] = random(windowHeight);
dotsR[i] = 6;
}

noStroke();
background(0);




// Instancier l'analyseur sonore
volumeson = new p5.Amplitude() ;

//Lancer le Mp3
musique.play();

}

function draw() {
//afficher l'image

background(0,10);
image(nuage,0,0);


textFont (font); //ne marche pas ?!
textSize(250);
  
//J'écris
text("RADIO\nACTI-\nVITY",10,310); //Chaine (suite de caractères), pos x, pos y

fill(116,249,50,100);

//particules
noStroke();
for(var i=0; i<dotsX.length; i++){


var distance = 400;
var distRatio = distance / 300.0;

if( distRatio > 1.0 )
{
dotsR[i] = lerp(dotsR[i], 6, 0.03);
ellipse(dotsX[i], dotsY[i], dotsR[i], dotsR[i]);
}
else
{
dotsR[i] = lerp(dotsR[i], (1.0 - distRatio) * 80, 0.03);
ellipse(dotsX[i], dotsY[i], dotsR[i], dotsR[i]);
}

dotsX[i] += random(-10,10);
dotsY[i] += random(-10, 10);


}

//Fade out
//fill(0,60);
//rect(0,0,width,height);


//Je recup le niveau sonore
let niveau = volumeson.getLevel();

//Je détermine la taille d'une ellipse grace au niveau
let taille = map(niveau, 0, 1, 0, 40);


//on avance dans le "temps" (on décale le point de départ)
temps += 0.04 ;
//On attribue à une nouvelle variable (angle) ce nouveau point de départ
let angle = temps ;

//A partir de ce point de départ, on dessine les ellipses
//sur la base de déplacement (sauts) sur l'axe x
//tous les 20 pixels. Pour chaque position x, on calcule
//une position y en fonction de sinus
for (let x=0 ; x <=width; x += 1) {

//1. Calcul de la position y (à partir de chaque point x)
let y = map(sin(angle), -1, 1, 20, 100) ; //changer taille

//2. Vous pouvez jouer sur les formes tailles etc
fill(116,249,100,150);
ellipse(x, y, taille, taille); //on fait varier taille des ellipses avec le son

//3. On passe au tour suivant dans la boucle en mettant àjour la variable angle
angle += step;

} //fermeture de for


}