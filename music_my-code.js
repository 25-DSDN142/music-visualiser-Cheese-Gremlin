
//centre cup 980
// all variable colours in HSB unless otherwise stated


//all variables
let cocoa = (true);
  let spoonOutline = [0, 0, 66.3];
  let spoonColour = [0, 0, 78.4];
  let cocoaColour = [25, 93, 39];
  let creamOutline = [37, 19, 96];
  let creamColour = [38, 11, 100];
  let shmellowOutline = [310, 21, 100]; //-[347, 21, 100]
  let shmellowColour = [310, 17, 100]; //-[348, 17, 100]
let cake = (true);
  let cakeOutline = [25, 93, 39];
  let cakeColour = [25, 76, 42];
  //let icingOutline = [327, 48, 100]; (commented out as no longer used as its attached to soundMap)
  //let icingColour = [328, 33, 98]; (commented out as no longer used as its attached to soundMap)
let pancake = (true);
  let plateOutline = [227, 46, 70];
  let plateColour = [227, 40, 70];
  let pancakeOutline = [31, 61, 72]; //-[31, 61, 72]
  let pancakeTop = [31, 60, 76]; //-[31, 60, 76]
  let pancakeBottom = [31, 65, 79];
  let syrup = (true);
    let syrupOutline = [35, 54, 78];
    let syrupColour = ['rgba(223, 169, 92, 0.71)'];
  let berryOutline = [229, 67, 69];
  let berryColour = [216, 68, 76];
let boba = (true);
  let cup = (true);
    let cupOutline = [0, 0, 66.3]; //colour of cup outline -best: rgb:(169, 169, 169)
    let cupRim = [0, 0, 78.4]; //colour of rim -best: rgb:(200, 200, 200)
    let cap = (true);
    let cupHighlights = (true);
    let cupHighlightColour = ['rgba(255, 255, 255, 0.31)']; // -['rgba(255, 255, 255, 0.56)']
    let transparent = (true);
    let transparentFill = ('rgba(196, 196, 196, 0.2)'); // set colour of transparent plactic of cup
  let liquid = (true);
    //let liquidOutlineColour = [288, 39.2, 100]; //medium purple rgb:[235, 155, 255] (commented out as no longer used as its attached to soundMap)
    //let liquidColour = [289, 30.4, 98]; //light purple rgb:[236, 174, 250] (commented out as no longer used as its attached to soundMap)
  let balls = (true); //toggles boba balls
    let ballOutline = (true);
    //let ballOutlineColour = [288, 88.2, 49.8]; (commented out as no longer used as its attached to soundMap)
    //let ballColour = [288, 87.8, 58]; (commented out as no longer used as its attached to soundMap)
    let ballSize = (45); //boba ball diamiter
    //let ballY = (830); // height of boba balls (commented out as no longer used as its attached to soundMap)
  let straw = (true);
    let strawWidth = (55); //width of straw
    //let strawTop = (215); //decides where top of straw ends (commented out as no longer used as its attached to a soundMap)
    let strawBottom = (592); //where the bottom of the straw ends
    let strawOutline = [38, 43.7, 96.9]; //colour of straw outline -rgb:[255, 218, 154] -rgb:[247, 207, 139]
    let strawColour = [38, 33.2, 98]; //colour of strtaw centre -rgb:[255, 230, 186] -rgb:[250, 220, 167]
let oldLights = (false);
let lights = (true);
  let stars = (true);
  let stringColour = [0, 0, 0];
  let starOutline = [0, 0, 0];
  //let starColour = [55, 100, 100]; //(commented out as no longer used as its attached to soundMap)
let SmallVisualiser = (true);

let firstRun = (true);
let myImage;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(30)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

//sounMaps for small music Visualizer
  let vocalMapY = map(vocal, 0, 100, 100, 1000);
  let drumMapY = map(drum, 0, 100, 100, 1000);
  let bassMapY = map(bass, 0, 100, 100, 1000);
  let otherMapY = map(other, 0, 100, 100, 1000);

//map to HSB colourMode
  let vocalHSBMap = map(vocal, 0, 100, 0, 360);
  let drumHSBMap = map(drum, 0, 100, 0, 360);
  let bassHSBMap = map(bass, 0, 100, 0, 360);
  let otherHSBMap = map(other, 0, 100, 0, 360);

//Boba SoundMap
  //soundMaps for boba balls
    let ballMapY1 = map(other, 0, 100, 830, 767); //centre and outer
    let ballMapY2 = map(other, 0, 100, 830, 800); //middle lower
    let ballMapY3 = map(other, 0, 100, 830, 733); //middle upper
    let ballMapY4 = map(other, 0, 100, 830, 700); //outer upper and centre upper
  //soundMap for straw
    let strawTop = map(other, 0, 100, 250, 200); //strawTop variable above needs to be commented out for this to work
  //soundmap for liquid & boba ball colour (full spectrum colours)
    // let liquidColour = [otherHSBMap, 50, 100];
    // let liquidOutlineColour = [otherHSBMap, 50, 80];
    // let ballColour = [otherHSBMap, 50, 50];
  //soundmap for liquid & boba ball colour (purple spectrum)
    let bobaColourMap = map(other, 0, 100, 300, 250); //changing values of "other" to be within desired colour range (purple)
    let liquidColour = [bobaColourMap, 50, 100];
    let liquidOutlineColour = [bobaColourMap, 50, 80];
    let ballColour = [bobaColourMap, 50, 60];
    let ballOutlineColour = [bobaColourMap, 50, 55];

//Stars soundMap
  let starColourMap = map (bass, 0, 100, 100, 20); //changes value of "drum" to change lightness/ whitness of yellow in stars
  let starColour = [55, starColourMap, 100];

//Pancake SoundMap
  let syrupMap = map (drum, 0, 100, 0, 30);
  let berryMap = map (drum, 0, 100, 0, -10);

//Cocoa SoundMap
  let shmelloMap = map (other, 0, 100, -5, 7);
  let spoonMap = map (other, 0, 100, 0, 20);

//Cake SoundMap
  let icingMap = map (bass, 0, 100, 0, 7);
  let icingColourMap = map(bass, 0, 100, 320, 280); 
  let icingColour = [icingColourMap, 40, 100];
  let icingOutline = [icingColourMap, 48, 92];

  let creamMap = map (bass, 0, 100, -5, 10);

//plants SoundMap
  let plantsMap = map (drum, 0, 100, 1, 1.1);

// loading in reffernce and background images 
push ();
if (firstRun){
boba = loadImage ('Boba.png');
lights = loadImage ('Lights.png');
backgroundImage = loadImage ('cafe background without plants.png');
pancakeImage = loadImage ('Pancake.png');
cakeImage = loadImage ('Cake.png');
cocoaImage = loadImage ('Cocoa.png');
flowerImage = loadImage ('Flower.png');
plantImage = loadImage ('Plant.png');
firstRun = (false);
}
image (backgroundImage, 0, 0);
//image (cakeImage, 0, 0);
//image (cocoaImage, 0, 0);
// push ();
// translate (-120, -50);
// scale (1.1);
// image (pancakeImage, 0, 0);
// pop ();
//image (boba, 500, 170);
//image (lights, 0, 0, 960, 540);
//image (lights, 1100, 0, 960, 540);
pop ();


colorMode(HSB);
angleMode (DEGREES);

if (counter>600&&counter<1200){ //stuff starts hapenning after 10 seconds and stops after 20seconds

}


if (cocoa){
push ();
//Plate
  strokeWeight (8);
  stroke (plateOutline);
  fill (plateColour);
  ellipse (385, 705, 180, 50);
  ellipse (385, 705, 80, 20);

//spoon
  strokeWeight (8);
  stroke (plateOutline);
  fill (plateColour);
  push ();
  rotate (-25);
  translate (-265, 60);
  rect (340, 600, 15, 50+spoonMap, 10);
  pop ();
//Cup
  strokeWeight (8);
  stroke (plateOutline);
  fill (plateColour);
  beginShape (); //handle
  vertex (445, 625);
  quadraticVertex (475, 620, 475, 640);
  quadraticVertex (475, 660, 440, 670);
  vertex (440, 660);
  quadraticVertex (465, 650, 465, 640);
  quadraticVertex (465, 630, 445, 635);
  endShape ();

  beginShape (); //cup base
  vertex (325, 610);
  quadraticVertex (325, 705, 385, 705);
  quadraticVertex (445, 705, 445, 610);
  endShape ();

  fill (cocoaColour);
  strokeWeight (0);
  ellipse (385, 610, 120, 25); //cocoa liquid
  noFill ();

  strokeWeight (8);
  ellipse (385, 610, 120, 25); //cup rim

//Toppings 
//cream
  strokeWeight (0);
  fill (creamColour);
  beginShape();
  vertex (340, 615);
  quadraticVertex (330, 600, 350, 590);
  quadraticVertex (345, 575, 365, 570);
  quadraticVertex (385, 568, 390, 555);
  quadraticVertex (415, 560, 410, 575);
  quadraticVertex (425, 580, 422, 592);
  quadraticVertex (440, 600, 430, 615);
  quadraticVertex (385, 630, 340, 615);
  endShape ();
  
  //outline (drawn in seperate "swoops" to keep round edges. when all conected, corner become pointy)
  strokeWeight (8);
  stroke (creamOutline);
  noFill ();
  beginShape();
  vertex (340, 615);
  quadraticVertex (330, 600, 350, 590);
  endShape ();
  beginShape ();
  vertex (350, 590);
  quadraticVertex (345, 575, 365, 570);
  quadraticVertex (385, 568, 390, 555);
  endShape ();
  beginShape ();
  vertex (390, 555);
  quadraticVertex (415, 560, 410, 575);
  quadraticVertex (400, 585, 385, 583);
  endShape ();
  beginShape ();
  vertex (410, 575);
  quadraticVertex (425, 580, 422, 592);
  quadraticVertex (410, 605, 370, 600);
  endShape ();
  beginShape ();
  vertex (422, 592);
  quadraticVertex (440, 600, 430, 615);
  endShape ();

//marshmellows
  strokeWeight (8);
  stroke (shmellowOutline);
  fill (shmellowColour);

  function shmello (shmelloX, shmelloY){
  rect (shmelloX, shmelloY, 30, 25, 10);

  }
  push ();
  rotate (25);
  translate (205, -210);
  shmello (370-shmelloMap, 600-shmelloMap);
  pop ();
  push ();
  rotate (-45);
  translate (-490, 110);
  shmello (370+shmelloMap, 600+shmelloMap);
  pop ();

  //drawing half the rim again to cover toppings
  strokeWeight (8);
  stroke (plateOutline);
  noFill ();
  arc (385, 610, 120, 25, 0, 180);


pop ();
}

if (cake){
push ();
//plate 
  strokeWeight (8);
  stroke (plateOutline);
  fill (plateColour);

  ellipse (145, 755, 350, 120);
  ellipse (145, 755, 290, 75);
//cake part
  strokeWeight (0);
  stroke (cakeOutline);
  fill (cakeColour);

  beginShape (); // cake fill
  vertex (230, 770);
  vertex (235, 680);
  vertex (50, 670)
  vertex (48, 760)
  endShape (CLOSE);

  strokeWeight (8);
  line (230, 770, 235, 680); //main cake outline
  line (235, 680, 50, 670);
  line (50, 670, 48, 760);
  line (48, 760, 230, 770);
  line (50, 737.5, 230, 747.5); //lowest cake layer
  line (50, 715, 230, 725);
  line (50, 692.5, 230, 702.5);

//icing
  strokeWeight (8);
  stroke (icingOutline);
  fill (icingColour);


  beginShape (); //drip
  vertex (120, 645);
  vertex (50, 668);
  quadraticVertex (42, 670, 47, 700); 
  quadraticVertex (50, 710, 48, 730);
  quadraticVertex (45, 740, 46, 750);
  quadraticVertex (50, 765+icingMap, 60, 755+icingMap); //drip tip
  quadraticVertex (68, 745, 65, 735);
  quadraticVertex (60, 720, 68, 700);
  quadraticVertex (73, 685, 95, 690);
  quadraticVertex (120, 700+icingMap, 140, 690);
  quadraticVertex (150, 685, 165, 695);
  quadraticVertex (190, 710+icingMap, 210, 695);
  quadraticVertex (215, 690, 225, 695);
  quadraticVertex (240, 700+icingMap, 243, 690);
  quadraticVertex (243, 680, 235, 678); //right tip
  vertex (120, 645);
  endShape ();

  strokeWeight (7);
  line (65, 673, 100, 675); //trianle line
  line (120, 676, 200, 682);

//cream
  strokeWeight (8);
  stroke (creamOutline);
  fill (creamColour);

  beginShape ();
  vertex (120, 620-creamMap);
  quadraticVertex (115, 635, 100, 640);
  quadraticVertex (80, 650, 90, 660);
  quadraticVertex (120, 675, 150, 660);
  quadraticVertex (160, 650, 140, 640);
  quadraticVertex (125, 635, 120, 620-creamMap);
  endShape ();

  arc (120, 650, 20, 3, 0, 180);


pop ();
}

if (pancake){
push ();
//plate
  stroke (plateOutline);
  fill (plateColour);
  strokeWeight (8);
  ellipse (1285, 950, 520, 190);
  ellipse (1285, 950, 430, 130);
//pancake
  function drawPancake (pancakeX, pancakeY){
  stroke (pancakeOutline);
  strokeWeight (8);
  fill (pancakeBottom);
  beginShape ();
  vertex (pancakeX-150, pancakeY-10);
  quadraticVertex (pancakeX-210, pancakeY+60, pancakeX, pancakeY+65);
  quadraticVertex (pancakeX+210, pancakeY +60, pancakeX+150, pancakeY-10)
  endShape ();
  fill (pancakeTop)
  ellipse (pancakeX, pancakeY, 310, 80);
  }

  drawPancake (1285, 920);
  drawPancake (1280, 880);
  drawPancake (1285, 840);
  drawPancake (1280, 800); //top pancake

//syrup
if (syrup){
  push ();
  
  // scale (1, syrupMap, 1);
  // translate (0, -syrupMap*5);

  strokeWeight (8);
  stroke (syrupOutline);
  fill (syrupColour);
  beginShape ();
  vertex (1180, 770);
  quadraticVertex (1285, 750, 1400, 773);
  quadraticVertex (1430, 780, 1400, 800);
  quadraticVertex (1390, 810, 1405, 820);
  quadraticVertex (1420, 825, 1410, 870);
  quadraticVertex (1400, 890, 1410, 920+syrupMap);
  quadraticVertex (1410, 940+syrupMap, 1390, 930+syrupMap);
  quadraticVertex (1380, 920+syrupMap, 1385, 890+syrupMap);
  quadraticVertex (1385, 845, 1350, 850);
  quadraticVertex (1330, 860, 1335, 880);
  quadraticVertex (1340, 890, 1335, 900+syrupMap);
  quadraticVertex (1325, 910+syrupMap, 1315, 900+syrupMap);
  quadraticVertex (1310, 890+syrupMap, 1312, 870+syrupMap);
  quadraticVertex (1310, 855, 1290, 850);
  quadraticVertex (1275, 850, 1270, 865);
  quadraticVertex (1265, 880, 1270, 900);
  quadraticVertex (1275, 915, 1273, 930+syrupMap);
  quadraticVertex (1260, 950+syrupMap, 1245, 930+syrupMap);
  quadraticVertex (1240, 920+syrupMap, 1240, 900);
  quadraticVertex (1245, 880, 1220, 875);
  quadraticVertex (1205, 875, 1210, 900);
  quadraticVertex (1215, 910+syrupMap, 1205, 915+syrupMap);
  quadraticVertex (1190, 915+syrupMap, 1185, 900+syrupMap);
  quadraticVertex (1180, 890+syrupMap, 1180, 880);
  quadraticVertex (1175, 850, 1150, 855);
  quadraticVertex (1130, 850, 1150, 830);
  quadraticVertex (1155, 820, 1145, 810);
  quadraticVertex (1110, 790, 1180, 770);
  endShape ();

  pop ();
}

// blueberries
  function drawBerry (berryX, berryY){
    strokeWeight (8);
    stroke (berryOutline);
    fill (berryColour);
    ellipse (berryX, berryY, 50, 30);
    beginShape ();
    vertex (berryX-7, berryY-3);
    quadraticVertex (berryX-5, berryY, berryX+5, berryY-2);
    endShape ();
  }
  drawBerry (1280, 800-(berryMap)); //middle berry
  drawBerry (1250, 762+(berryMap*0.8)); //top left berry
  drawBerry (1190, 810+(berryMap*1.5)); //bottom left berry
  drawBerry (1350, 810-(berryMap*2)); //bottom right berry
  drawBerry (1380, 775+berryMap); //top right berry


pop ();
}

if (boba){
push ();
translate (1000, 330)
scale (0.75);


if (liquid){
push ();

//top liquid fill
  strokeWeight (0);
  fill (liquidColour);

  beginShape();
  vertex (835, 610);
  quadraticVertex (900, 590, 980, 615);
  quadraticVertex (1050, 640, 1125, 605);
  quadraticVertex (1080, 560, 1000, 580);
  quadraticVertex (980, 585, 940, 580);
  quadraticVertex (890, 575, 835, 610);
  endShape ();

//lower liquid fill

  beginShape ();
  vertex (835, 610);
  vertex (850, 860);
  quadraticVertex (980, 950, 1115, 860);
  vertex (1125, 610);
  quadraticVertex (980, 590, 835, 610);
  endShape ();

  

//liquid outline
  stroke (liquidOutlineColour);
  strokeWeight (10);
  noFill ();

  beginShape(); //lower liquid line
  vertex (835, 610);
  quadraticVertex (900, 590, 980, 615);
  quadraticVertex (1050, 640, 1125, 605);
  endShape ();

  beginShape(); //upper liquid line
  vertex (835, 610);
  quadraticVertex (890, 575, 940, 580);
  quadraticVertex (980, 585, 1000, 580);
  quadraticVertex (1080, 560, 1125, 600);
  endShape ();
  




pop ();
}

if (balls){
push ();
  if (ballOutline){
  strokeWeight (10);
  stroke (ballOutlineColour);
  }
  else {
  strokeWeight (0);
  }
  fill (ballColour);

  ellipse (880, ballMapY1, ballSize, ballSize); //outer
  ellipse (875, ballMapY4-50, ballSize, ballSize); //outer upper
  ellipse (930, ballMapY3-25, ballSize, ballSize); //upper layer
  ellipse (930, ballMapY2+25, ballSize, ballSize); 
  ellipse (980, ballMapY1, ballSize, ballSize); //centre ball
  ellipse (980, ballMapY4-55, ballSize, ballSize); //upper centre ball
  ellipse (1030, ballMapY2+25, ballSize, ballSize); 
  ellipse (1030, ballMapY3-25, ballSize, ballSize); //upper layer
  ellipse (1085, ballMapY4-50, ballSize, ballSize); //outer upper
  ellipse (1080, ballMapY1, ballSize, ballSize); //outer

pop ();
}


if (straw){
push ();
  //outline
  stroke (strawOutline);
  strokeWeight (10);
  fill (strawColour);

  beginShape (); //straw base
  vertex (980+(strawWidth/2), strawTop);
  vertex (980+(strawWidth/2), strawBottom);
  quadraticVertex (980, strawBottom+15, 980-(strawWidth/2), strawBottom);
  vertex (980-(strawWidth/2), strawBottom);
  vertex (980-(strawWidth/2), strawTop);
  endShape ();
  
  ellipse (980, strawTop, strawWidth, 15); //straw top hole

pop ();
}


if (cup){
push ();

//base
  //outline
  stroke (cupOutline);
  strokeWeight (10);
  noFill ();

  beginShape (); //bottom curve
  curveVertex (827, 527);
  curveVertex (850, 860);
  curveVertex (1115, 860);
  curveVertex (1132, 527);
  endShape ();

  beginShape (LINES); //walls
  vertex (1115, 860); 
  vertex (1132, 527);
  vertex (827, 527);
  vertex (850, 860);
  endShape ();


  //inside transparent plastic
  if (transparent){
  strokeWeight (0);
  fill (transparentFill); //transparent grey

  beginShape ();
  curveVertex (827, 527);
  curveVertex (850, 860);
  curveVertex (1115, 860);
  curveVertex (1132, 527);
  endShape ();

  beginShape ();
  vertex (1115, 860); 
  vertex (1132, 527);
  vertex (827, 527);
  vertex (850, 860);
  endShape (CLOSE);
  }

if (cap){

  if (transparent){
  fill (transparentFill); //transparent grey

  }
  else {
    noFill ();
  }
  stroke (cupOutline);
  //stroke (57, 252, 3); //green
  strokeWeight (10);

  beginShape ();
  curveVertex (815, 500);
  curveVertex (815, 475);
  curveVertex (847, 405);
  curveVertex (920, 345); //hill
  curveVertex (980, 350); //centre dip
  curveVertex (1040, 345); //hill
  curveVertex (1113, 405);
  curveVertex (1145, 475);
  curveVertex (1145, 500);
  endShape ();
}

//cup rim
  //fill
  
  strokeWeight (0);
  fill (cupRim);

  beginShape ();
  vertex (810, 475);
  quadraticVertex (980, 500, 1155, 475);
  vertex (1155, 527);
  quadraticVertex (980, 550, 810, 527);
  endShape ();




  if (cap){
  if (transparent){
  fill (transparentFill); //transparent grey

  beginShape (); //upper arc
  curveVertex (827, 400);
  curveVertex (810, 475);
  curveVertex (1155, 475);
  curveVertex (1132, 400);
  endShape ();
  }
  }


  //outline
  stroke (cupOutline);
  strokeWeight (10);
  noFill ();
  
  beginShape (); //lower arc
  curveVertex (827, 400);
  curveVertex (810, 527);
  curveVertex (1150, 527);
  curveVertex (1132, 400);
  endShape ();

  beginShape (); //upper arc
  curveVertex (827, 400);
  curveVertex (810, 475);
  curveVertex (1150, 475);
  curveVertex (1132, 400);
  endShape ();

  beginShape (LINES); //walls
  vertex (810, 475);
  vertex (810, 527);
  vertex (1150, 475);
  vertex (1150, 527);
  endShape ();


if (cupHighlights){
  strokeWeight (10);
  stroke (cupHighlightColour);

  line (863, 700, 870, 800); //highlight on cup base
  line (872, 820, 873, 830);

  beginShape (); //highlight on cup cap 
  vertex (857, 430);
  quadraticVertex (875, 400, 920, 370);
  endShape ();
  line (847, 452, 850, 445);

  beginShape (); //highlight on rim
  vertex (830, 505);
  quadraticVertex (900, 515, 970, 513.5);
  endShape ();
  line (990, 513.5, 1005, 513);



}

pop ();
}


pop ();
}

if (oldLights){
push ();

//string
  stroke (stringColour);
  strokeWeight (3.5);
  noFill ();

  beginShape ();
  vertex (0, 75);
  quadraticVertex (15, 75, 75, 20);
  quadraticVertex (230, 210, 385, 20);
  quadraticVertex (470, 100, 570, 20);
  quadraticVertex (700, 200, 845, 20);
  quadraticVertex (950, 160, 1065, 25);
  quadraticVertex (1220, 220, 1400, 20);
  quadraticVertex (1550, 200, 1705, 20);
  quadraticVertex (1800, 100, 1890, 20);
  quadraticVertex (1910, 45, 1920, 50);
  endShape ();

//stars are drawn outside of 
//fairy lights stars

  function star(starX, starY) { //75, 20
  //fill
  strokeWeight (0)
  fill (starColour);
  beginShape ();
  vertex (starX+3, starY-11); //tip
  vertex (starX+7, starY-2);
  vertex (starX+18, starY-1);
  vertex (starX+10, starY+7);
  vertex (starX+13, starY+18);
  vertex (starX+3, starY+13); //base
  vertex (starX-7, starY+18);
  vertex (starX-5, starY+7);
  vertex (starX-14, starY-1);
  vertex (starX-3, starY-2);
  vertex (starX+3, starY-11);
  endShape ();

  //outline
  stroke (starOutline);
  strokeWeight (3.5);
  noFill ();

  beginShape (LINES);
  vertex (starX+3, starY-11); //tip
  vertex (starX+7, starY-2);
  vertex (starX+18, starY-1);
  vertex (starX+10, starY+7);
  vertex (starX+13, starY+18);
  vertex (starX+3, starY+13); //base
  vertex (starX-7, starY+18);
  vertex (starX-5, starY+7);
  vertex (starX-14, starY-1);
  vertex (starX-3, starY-2);
  vertex (starX+3, starY-11);
  endShape ();

  beginShape (LINES);
  vertex (starX+7, starY-2);
  vertex (starX+18, starY-1);
  vertex (starX+10, starY+7);
  vertex (starX+13, starY+18);
  vertex (starX+3, starY+13); //base
  vertex (starX-7, starY+18);
  vertex (starX-5, starY+7);
  vertex (starX-14, starY-1);
  vertex (starX-3, starY-2);
  vertex (starX+3, starY-11);
  endShape ();
  }
//drawing individual stars
if (stars){
push();
rotate (-15)
star (8, 78);
pop ();
star (75, 20); //1st tip
push();
rotate (20)
star (155, 42);
pop ();
star (225, 127);
push();
rotate (-25)
star (260, 221);
pop ();
star (385, 20); //2nd tip
star (477, 72);
star (570, 20); //3rd tip
push();
rotate (19)
star (610, -117);
pop ();
star (705, 121);
push();
rotate (-20)
star (730, 348);
pop ();
star (845, 20); //4th tip
push();
rotate (15)
star (900, -145);
pop ();
push();
rotate (-15)
star (960, 343);
pop ();
star (1065, 25); //5th tip
push();
rotate (15)
star (1110, -195);
pop ();
star (1235, 133);
push();
rotate (-20)
star (1230, 543);
pop ();
star (1400, 20); //6th tip
push();
rotate (15)
star (1430, -290);
pop ();
star (1550, 122);
push();
rotate (-15)
star (1573, 510);
pop ();
star (1705, 20); //7th tip
star (1800, 71);
star (1890, 20); //8th tip
}


pop ();
}

if (lights){
// star function
  function star1(starX, starY) { //75, 20
    //fill
    strokeWeight (0)
    fill (starColour);
    beginShape ();
    vertex (starX+3, starY-11); //tip
    vertex (starX+7, starY-2);
    vertex (starX+18, starY-1);
    vertex (starX+10, starY+7);
    vertex (starX+13, starY+18);
    vertex (starX+3, starY+13); //base
    vertex (starX-7, starY+18);
    vertex (starX-5, starY+7);
    vertex (starX-14, starY-1);
    vertex (starX-3, starY-2);
    vertex (starX+3, starY-11);
    endShape ();
    //outline
    stroke (starOutline);
    strokeWeight (3.5);
    noFill ();

    beginShape (LINES);
    vertex (starX+3, starY-11); //tip
    vertex (starX+7, starY-2);
    vertex (starX+18, starY-1);
    vertex (starX+10, starY+7);
    vertex (starX+13, starY+18);
    vertex (starX+3, starY+13); //base
    vertex (starX-7, starY+18);
    vertex (starX-5, starY+7);
    vertex (starX-14, starY-1);
    vertex (starX-3, starY-2);
    vertex (starX+3, starY-11);
    endShape ();

    beginShape (LINES);
    vertex (starX+7, starY-2);
    vertex (starX+18, starY-1);
    vertex (starX+10, starY+7);
    vertex (starX+13, starY+18);
    vertex (starX+3, starY+13); //base
    vertex (starX-7, starY+18);
    vertex (starX-5, starY+7);
    vertex (starX-14, starY-1);
    vertex (starX-3, starY-2);
    vertex (starX+3, starY-11);
    endShape ();
  }
  function star2(starX, starY) { //75, 20
    //fill
    strokeWeight (0)
    fill (starColour);
    beginShape ();
    vertex (starX+8, starY-10); //tip
    vertex (starX+8, starY-1);
    vertex (starX+17, starY+5);
    vertex (starX+8, starY+8);
    vertex (starX+5, starY+20);
    vertex (starX-1, starY+12); //base
    vertex (starX-13, starY+12);
    vertex (starX-7, starY+3);
    vertex (starX-11, starY-8);
    vertex (starX-1, starY-5);
    endShape ();
    //outline
    stroke (starOutline); //starOutline
    strokeWeight (3.5);
    noFill ();

    beginShape (LINES);
    vertex (starX+8, starY-10); //tip
    vertex (starX+8, starY-1);
    vertex (starX+17, starY+5);
    vertex (starX+8, starY+8);
    vertex (starX+5, starY+20);
    vertex (starX-1, starY+12); //base
    vertex (starX-13, starY+12);
    vertex (starX-7, starY+3);
    vertex (starX-11, starY-8);
    vertex (starX-1, starY-5);
    endShape ();

    beginShape (LINES);
    vertex (starX-1, starY-5);
    vertex (starX+8, starY-10); //tip
    vertex (starX+8, starY-1);
    vertex (starX+17, starY+5);
    vertex (starX+8, starY+8);
    vertex (starX+5, starY+20);
    vertex (starX-1, starY+12); //base
    vertex (starX-13, starY+12);
    vertex (starX-7, starY+3);
    vertex (starX-11, starY-8);
    endShape ();
  }
  function star3(starX, starY) { //75, 20
    //fill
    strokeWeight (0)
    fill (starColour);
    beginShape ();
    vertex (starX-3, starY-11); //tip
    vertex (starX+4, starY-5);
    vertex (starX+15, starY-8);
    vertex (starX+11, starY+2);
    vertex (starX+18, starY+11);
    vertex (starX+8, starY+11); //base
    vertex (starX, starY+19);
    vertex (starX-2, starY+9);
    vertex (starX-14, starY+5);
    vertex (starX-5, starY);
    endShape ();
    //outline
    stroke (starOutline);
    strokeWeight (3.5);
    noFill ();

    beginShape (LINES);
    vertex (starX-3, starY-11); //tip
    vertex (starX+4, starY-5);
    vertex (starX+15, starY-8);
    vertex (starX+11, starY+2);
    vertex (starX+18, starY+11);
    vertex (starX+8, starY+11); //base
    vertex (starX, starY+19);
    vertex (starX-2, starY+9);
    vertex (starX-14, starY+5);
    vertex (starX-5, starY);
    endShape ();

    beginShape (LINES);
    vertex (starX+4, starY-5);
    vertex (starX+15, starY-8);
    vertex (starX+11, starY+2);
    vertex (starX+18, starY+11);
    vertex (starX+8, starY+11); //base
    vertex (starX, starY+19);
    vertex (starX-2, starY+9);
    vertex (starX-14, starY+5);
    vertex (starX-5, starY);
    vertex (starX-3, starY-11); //tip
    endShape ();
  }
//lower Shelf
  //string
    stroke (stringColour);
    strokeWeight (5);
    noFill ();

    beginShape ();
    vertex (790, 543);
    quadraticVertex (870, 630, 950, 543);
    quadraticVertex (1100, 660, 1250, 543);
    quadraticVertex (1360, 640, 1470, 543);
    endShape ();
  //stars
    star2 (815, 582);
    star1 (870, 598); //first swoop
    star3 (925, 580);

    star2 (1020, 598);
    star1 (1100, 612); //second swoop
    star3 (1180, 598);

    star2 (1295, 590);
    star1 (1360, 604); //third swoop
    star3 (1425, 589);

//upper shelf
  //string
    stroke (stringColour);
    strokeWeight (5);
    noFill ();

    beginShape ();
    vertex (1240, 253);
    quadraticVertex (1380, 320, 1520, 253);
    quadraticVertex (1600, 305, 1680, 253);
    quadraticVertex (1800, 325, 1940, 253);
    endShape ();
  //star
    star2 (1300, 289);
    star1 (1380, 300); //first swoop
    star3 (1460, 289);

    star2 (1560, 285); //second swoop
    star3 (1640, 285);

    star2 (1725, 289);
    star1 (1800, 301); //third swoop
    star3 (1875, 290);





//moving plants
push ();
translate (950, 500);
scale (1, plantsMap);
image (flowerImage, -200, -310); 
pop ();


push ();
translate (1770, 200);
scale (1, plantsMap)
image (plantImage, -230, -220);
pop ();


if (SmallVisualiser) {
push ();
colorMode (RGB);
scale (0.1);
//base
stroke (255, 140, 219);
fill (255, 140, 2195);
strokeWeight (10);

ellipse (200, bassMapY, 100, 100);

//drum
stroke (219, 140, 255);
fill (219, 140, 255);
strokeWeight (10);

ellipse (400, drumMapY, 100, 100);

//other
stroke (140, 159, 255);
fill (140, 159, 255);
strokeWeight (10);

ellipse (600, otherMapY, 100, 100);

//vocal
stroke (140, 236, 255);
fill (140, 236, 255);
strokeWeight (10);

ellipse (800, vocalMapY, 100, 100);

pop ();

// colorMode(HSB, 100);
// stroke (bass, 80, 80);
// fill (bass, 80, 80);
// strokeWeight (10)
// for (let i=0; i<=4; i++){
//  let bassX=i*200
//  ellipse (bassX+100, (bassMapY*(i/10))+100, 100, 100);

// }
  
//drums
// colorMode(RGB, 255);
//   strokeWeight (drumMapY/10);
//   stroke (73, 56, 255);

// if (drumMapY > 350){
//    fill (235, 49, 204);
//    ellipse (width/5, width/5, drumMapY/3, drumMapY/3)
//    ellipse (width-(width/5), width-(width/5), drumMapY/3, drumMapY/3)
//    }

//   fill (255);
//   ellipse (width/2, width/2, drumMapY, drumMapY);

  
//   fill (66, 245, 66);
//   ellipse (width/2, width/2, drumMapY /2, drumMapY /2)

}

}





}
