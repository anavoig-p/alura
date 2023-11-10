// bolinha
let xBola = 300;
let yBola = 225;
let diametro = 20;
let raio = diametro / 2;

// velocidade bolinha
let vxBola = +10;
let vyBola = +10;

// raquete
let xR = 0;
let yR = 225;
let comprimento = 10;
let altura = 120;

// oponente
let xRO = 590;
let yRO = 150;
let vyRO;

// placar
let meuspontos = 0;
let pontosoponente = 0;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("rgb(61,61,83)");
  mostraB();
  moveB();
  verificaColisaoBorda();
  mostraR(xR, yR);
  moveR();
  verificaColisaoRaquete(xR, yR);
  colisaoMinhaRaqueteBiblioteca();
  mostraRO(xRO, yRO);
  moveRO();
  verificaColisaoRaquete(xRO, yRO);
  colisaoRaqueteOponenteBiblioteca();
  incluiplacar();
  marcaponto();
}

function mostraB() {
  circle(xBola, yBola, diametro);
}

function moveB() {
  xBola += vxBola;
  yBola += vyBola;
}

function verificaColisaoBorda() {
  if (xBola + raio > width || xBola < 0) {
    vxBola *= -1;
  }
  if (yBola + raio > height || yBola < 0) {
    vyBola *= -1;
  }
}

function mostraR() {
  rect(xR, yR, comprimento, altura);
}

function moveR() {
  if (keyIsDown(UP_ARROW)) {
    yR -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yR += 10;
  }
}
function verificaColisaoRaquete() {
  if (
    xBola - raio < xR + comprimento &&
    yBola - raio < yR + altura &&
    yBola + raio > yR
  ) {
    vxBola *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xR, yR, comprimento, altura, xBola, yBola, raio);
  if (colidiu) {
    vxBola *= -1;
  }
}

function mostraRO() {
  rect(xRO, yRO, comprimento, altura);
}

function moveRO() {
  vyRO = yBola - yRO - comprimento / 2 - 30;
  yRO += vyRO;
}

function colisaoRaqueteOponenteBiblioteca() {
  colidiu = collideRectCircle(
    xRO,
    yRO,
    comprimento,
    altura,
    xBola,
    yBola,
    raio
  );
  if (colidiu) {
    vxBola *= -1;
  }
}

function incluiplacar() {
  fill("rgb(255,207,207)");
  text(meuspontos, 270, 30);
  text(pontosoponente, 330, 30);
}

function marcaponto() {
  if (xBola > 590) {
    meuspontos += 1;
  }
  if (xBola < 0) {
    pontosoponente += 1;
  }
}
