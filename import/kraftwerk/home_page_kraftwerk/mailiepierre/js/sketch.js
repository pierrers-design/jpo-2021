/******** VARIABLES ********/

var temps_global;
var largeur_affiche;
var hauteur_affiche;
var demiHauteur_affiche;
var demiLargeur_affiche;

var couleurFond_rouge;
var couleurFond_vert;
var couleurFond_bleu;

var epaisseurTrace;

var spacelab;
var niveauSon;

var kraftwerkBand;
var opaciteImage;

var fontTitle;
var opaciteTitre;

var dessinerSphere;
var rotationSphere;
var tailleSphere;
var tailleSphere_son;
var tempsTampon_vertex;
var intervale_vertex;
var tempsTampon_taille;
var intervale_taille;

var mini_lignes;
var vitesseLignes;
var tempsTampon_vitesse;
var intervale_vitesse;

/******** SON ********/

function preload() {
  spacelab = loadSound("./import/Spacelab.mp3");
  kraftwerkBand = loadImage("./import/kraftwerkBlue_band.png");
  fontTitle = loadFont("./import/Lack-Line-Regular.otf");
}

/******** FONCTION MINI LIGNES ********/

function mini_Ligne() {
  this.x = random(-demiLargeur_affiche, demiLargeur_affiche);
  this.y = random(-demiHauteur_affiche, demiHauteur_affiche);
  this.z = random(demiLargeur_affiche);
  this.position_z = this.z;

  this.update = function () {
    this.z = this.z - vitesseLignes;
    if (this.z < 1) {
      this.z = demiLargeur_affiche;
      this.x = random(-demiLargeur_affiche, demiLargeur_affiche);
      this.y = random(-demiHauteur_affiche, demiHauteur_affiche);
      this.position_z = this.z;
    }
  };

  this.show = function () {
    var positionBis_x = map(this.x / this.z, 0, 1, 0, demiLargeur_affiche);
    var positionBis_y = map(this.y / this.z, 0, 1, 0, demiHauteur_affiche);

    var position_x = map(
      this.x / this.position_z,
      0,
      1,
      0,
      demiLargeur_affiche
    );

    var position_y = map(
      this.y / this.position_z,
      0,
      1,
      0,
      demiHauteur_affiche
    );

    this.position_z = this.z;

    line(position_x, position_y, positionBis_x, positionBis_y);
  };
}

/******** FUNCTION SPHERE ********/

function sphereLab() {
  fill(0, 0, 0, 0);
  if (millis() - tempsTampon_vertex >= intervale_vertex) {
    tempsTampon_vertex = millis();
    if (dessinerSphere <= 9) {
      dessinerSphere += 1;
    }
  }

  if (millis() - tempsTampon_taille >= intervale_taille) {
    tempsTampon_taille = millis();
    if (tailleSphere < 160) {
      tailleSphere += 0.8;
    } else {
      tailleSphere = 160;
    }
  }

  tailleSphere_son = map(niveauSon, 0, 1, -30, 30);
  rotationSphere += 0.003;

  rotateY(rotationSphere);
  rotateX(rotationSphere);
  rotateZ(rotationSphere);

  sphere(tailleSphere + tailleSphere_son, dessinerSphere, dessinerSphere);
}

/******** FUNCTION IMAGE ********/

function imageLab() {
  image(kraftwerkBand, -320, -150, 640, 640);
}

/******** FUNCTION TITRE ********/

function texteTitre() {
  fill(255, opaciteTitre);
  textAlign(CENTER);
  text("SPACELAB", 0, -360);
}

/***************** SETUP ******************/

function setup() {
  largeur_affiche = 640;
  hauteur_affiche = 960;
  demiHauteur_affiche = largeur_affiche / 2;
  demiLargeur_affiche = largeur_affiche / 2;

  epaisseurTrace = 0;

  createCanvas(largeur_affiche, hauteur_affiche, WEBGL);
  stroke(255);

  temps_global = 0;

  couleurFond_rouge = 16;
  couleurFond_vert = 32;
  couleurFond_bleu = 90;

  /* IMAGE */

  opaciteImage = 255;

  /* SON */

  volume_son = new p5.Amplitude();
  spacelab.play();

  /* TEXTE */

  textSize(100);
  textFont(fontTitle);
  opaciteTitre = 255;

  /* LIGNES */

  vitesseLignes = 0;
  tempsTampon_vitesse = 0;
  intervale_vitesse = 100;
  mini_lignes = [];

  for (var i = 0; i < 50; i++) {
    mini_lignes[i] = new mini_Ligne();
  }

  /* SPHERE */

  dessinerSphere = 0;
  rotationSphere = 0;
  tailleSphere = 0;

  tempsTampon_vertex = 0;
  intervale_vertex = 500;
  tempsTampon_taille = 0;
  intervale_taille = 17;
}

/***************** DRAW ******************/

function draw() {
  background(couleurFond_rouge, couleurFond_vert, couleurFond_bleu);
  temps_global = millis();
  niveauSon = volume_son.getLevel();

  strokeWeight(epaisseurTrace);

  tint(255, opaciteImage);
  imageLab();

  texteTitre();

  for (var i = 0; i < mini_lignes.length; i++) {
    mini_lignes[i].update();
    mini_lignes[i].show();
  }

  if (millis() - tempsTampon_vitesse >= intervale_vitesse) {
    tempsTampon_vitesse = millis();
    if (vitesseLignes < 10) {
      vitesseLignes += 0.03;
    } else {
      vitesseLignes = 10;
    }
  }

  /* Apparition lignes */

  if (temps_global > 1000 && temps_global < 325000) {
    if (epaisseurTrace < 1) {
      epaisseurTrace += 0.001;
    } else {
      epaisseurTrace = 1;
    }
  }

  /* Disparition Lignes */

  if (temps_global > 324500) {
    if (epaisseurTrace > 0) {
      epaisseurTrace -= 0.001;
    } else {
      epaisseurTrace = 0;
    }
  }

  /* Disparition titre & image */

  if (temps_global > 25000 && temps_global < 330000) {
    if (opaciteTitre > 0) {
      opaciteTitre -= 1;
    } else {
      opaciteTitre = 0;
    }
    if (opaciteImage > 0) {
      opaciteImage -= 1;
    } else {
      opaciteImage = 0;
    }
  }

  /* Réaparition titre & image */

  if (temps_global > 346500) {
    if (opaciteTitre < 255) {
      opaciteTitre += 1;
    } else {
      opaciteTitre = 255;
    }
    if (opaciteImage < 255) {
      opaciteImage += 1;
    } else {
      opaciteImage = 255;
    }
  }

  /* Space Lab 01 */

  /* Space */
  if (temps_global >= 108000 && temps_global <= 110000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 111000 && temps_global <= 113000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  /* Space Lab 02 */

  /* Space */
  if (temps_global >= 116000 && temps_global <= 118000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 119000 && temps_global <= 121000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  /* Space Lab 03 */

  /* Space */
  if (temps_global >= 186000 && temps_global <= 188000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 189000 && temps_global <= 191000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  /* Space Lab 04 */

  /* Space */
  if (temps_global >= 194000 && temps_global <= 196000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 197000 && temps_global <= 199000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  /* Space Lab 05 */

  /* Space */
  if (temps_global >= 217000 && temps_global <= 219000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 220000 && temps_global <= 222000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  /* Space Lab 06 */

  /* Space */
  if (temps_global >= 225000 && temps_global <= 227000) {
    if (couleurFond_rouge < 196) {
      couleurFond_rouge += 3;
    } else {
      couleurFond_rouge = 196;
    }
    if (couleurFond_vert > 26) {
      couleurFond_vert -= 0.1;
    } else {
      couleurFond_vert = 26;
    }
    if (couleurFond_bleu > 52) {
      couleurFond_bleu -= 0.5;
    } else {
      couleurFond_bleu = 52;
    }
  } else if (temps_global >= 228000 && temps_global <= 230000) {
    if (couleurFond_rouge > 16) {
      couleurFond_rouge -= 3;
    } else {
      couleurFond_rouge = 16;
    }
    if (couleurFond_vert < 32) {
      couleurFond_vert += 0.1;
    } else {
      couleurFond_vert = 32;
    }
    if (couleurFond_bleu < 90) {
      couleurFond_bleu += 0.5;
    } else {
      couleurFond_bleu = 90;
    }
  }

  translate(0, 0, 160);
  if (temps_global >= 25000) {
    sphereLab();
  }

  v = round(millis() / 1000);
  console.log(v);
}