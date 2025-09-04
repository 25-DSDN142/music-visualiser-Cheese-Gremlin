
//all variables
let boba = (true);
  let cup = (true);
  let cupOutline = (169, 169, 169); //colour of cup outline -best: (169, 169, 169)
  let cap = (true);
  let transparent = (true);
  let transparentFill = ('rgba(196, 196, 196, 0.35)'); // set colour of transparent plactic of cup
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


if (boba){

push ();
scale (1.2);
if (firstRun){
myImage = loadImage ('Boba.png')
firstRun = (false);
}
//image(myImage, 500, 170)
pop ();

if (cup){
push ();

//base

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

  beginShape (); //upper arc
  curveVertex (827, 400);
  curveVertex (810, 475);
  curveVertex (1155, 475);
  curveVertex (1132, 400);
  endShape ();
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
  //curveVertex (860, 395);
  //curveVertex (880, 380);
  curveVertex (920, 345); //hill
  curveVertex (980, 350); //centre
  curveVertex (1040, 345); //hill
  //curveVertex (1080, 380);
  //curveVertex (1100, 395);
  curveVertex (1113, 405);
  curveVertex (1145, 475);
  curveVertex (1145, 500);
  endShape ();
}

//cup rim

//fill
  
  strokeWeight (0);
  fill (200, 200, 200);

  beginShape (); //lower arc
  curveVertex (827, 400);
  curveVertex (810, 527);
  curveVertex (1155, 527);
  curveVertex (1132, 400);
  endShape ();

  beginShape (); //walls
  vertex (810, 475);
  vertex (1155, 475);
  vertex (1155, 527);
  vertex (810, 527);
  endShape ();

  erase ();
  beginShape (); //upper arc
  curveVertex (827, 400);
  curveVertex (810, 475);
  curveVertex (1155, 475);
  curveVertex (1132, 400);
  endShape ();
  noErase ();

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
  curveVertex (1155, 527);
  curveVertex (1132, 400);
  endShape ();

  beginShape (); //upper arc
  curveVertex (827, 400);
  curveVertex (810, 475);
  curveVertex (1155, 475);
  curveVertex (1132, 400);
  endShape ();

  beginShape (LINES); //walls
  vertex (810, 475);
  vertex (810, 527);
  vertex (1155, 475);
  vertex (1155, 527);
  endShape ();



pop ();
}

}


if (SmallVisualiser) {
push ();
scale (0.1);
//base
stroke (255, 140, 219);
fill (255, 140, 2195);
strokeWeight (10)

ellipse (200, bassMapY, 100, 100);

//drum
stroke (219, 140, 255);
fill (219, 140, 255);
strokeWeight (10)

ellipse (400, drumMapY, 100, 100);

//other
stroke (140, 159, 255);
fill (140, 159, 255);
strokeWeight (10)

ellipse (600, otherMapY, 100, 100);

//vocal
stroke (140, 236, 255);
fill (140, 236, 255);
strokeWeight (10)

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






