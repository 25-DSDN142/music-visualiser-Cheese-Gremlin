
//centre cup 980


//all variables
let boba = (true);
  let cup = (true);
    let cupOutline = [169, 169, 169]; //colour of cup outline -best: (169, 169, 169)
    let cupRim = [200, 200, 200]; //colour of rim -best: (200, 200, 200)
    let cap = (true);
    let cupHighlights = (true);
    let cupHighlightColour = ['rgba(255, 255, 255, 0.56)']; // -['rgba(255, 255, 255, 0.56)']
    let transparent = (true);
    let transparentFill = ('rgba(196, 196, 196, 0.2)'); // set colour of transparent plactic of cup
  let liquid = (true);
    //let liquidOutlineColour = [235, 155, 255]; //medium purple [235, 155, 255] (commented out as no longer used as its attached to soundMap)
    //let liquidColour = [236, 174, 250]; //light purple [236, 174, 250] (commented out as no longer used as its attached to soundMap)
  let balls = (true); //toggles boba balls
    let ballOutline = (false);
    let ballOutlineColour = [105, 15, 127]; //ball outline colour
    //let ballColour = [122, 18, 148]; (commented out as no longer used as its attached to soundMap)
    let ballSize = (45); //boba ball diamiter
    //let ballY = (830); // height of boba balls (commented out as no longer used as its attached to soundMap)
  let straw = (true);
    let strawWidth = (55); //width of straw
    //let strawTop = (215); //decides where top of straw ends (commented out as no longer used as its attached to a soundMap)
    let strawBottom = (592); //where the bottom of the straw ends
    let strawOutline = [247, 207, 139]; //colour of straw outline -[255, 218, 154]
    let strawColour = [250, 220, 167]; //colour of strtaw centre -[255, 230, 186]
let SmallVisualiser = (true);

let firstRun = (true);
let myImage;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let vocalMapY = map(vocal, 0, 100, 100, 1000);
  let drumMapY = map(drum, 0, 100, 100, 1000);
  let bassMapY = map(bass, 0, 100, 100, 1000);
  let otherMapY = map(other, 0, 100, 100, 1000);

//soundMaps for boba balls
  let ballMapY1 = map(other, 0, 100, 830, 767); //centre and outer
  let ballMapY2 = map(other, 0, 100, 830, 800); //middle lower
  let ballMapY3 = map(other, 0, 100, 830, 733); //middle upper
  let ballMapY4 = map(other, 0, 100, 830, 700); //outer upper and centre upper

//soundMap for straw
  let strawTop = map(bass, 0, 100, 250, 200); //strawTop variable above needs to be commented out for this to work

//soundmap for liquid & boba ball colour
  let liquidColour = [other, 50, 100];
  let liquidOutlineColour = [other, 50, 80];
  let ballColour = [other, 50, 50];
  


if (boba){

push ();
scale (1.2);
if (firstRun){
myImage = loadImage ('Boba.png')
firstRun = (false);
}
//image(myImage, 500, 170)
pop ();


if (liquid){
push ();

//top liquid fill
  strokeWeight (0);
  colorMode(HSB, 100);
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
  colorMode (HSB, 100);
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
  colorMode (HSB, 100);
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



}


if (SmallVisualiser) {
push ();
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






