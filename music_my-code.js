
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let drumMap = map(drum, 0, 100, 100, 1000);
  let bassMap = map(bass, 0, 100, 100, 1000);

//base
colorMode(HSB, 100);
stroke (bass, 80, 80);
fill (bass, 80, 80);
strokeWeight (10)

for (let i=0; i<=4; i++){
 let bassX=i*200
 ellipse (bassX+100, (bassMap*(i/10))+100, 100, 100);

}
  
//drums
// colorMode(RGB, 255);
//   strokeWeight (drumMap/10);
//   stroke (73, 56, 255);

// if (drumMap > 350){
//    fill (235, 49, 204);
//    ellipse (width/5, width/5, drumMap/3, drumMap/3)
//    ellipse (width-(width/5), width-(width/5), drumMap/3, drumMap/3)
//    }

//   fill (255);
//   ellipse (width/2, width/2, drumMap, drumMap);

  
//   fill (66, 245, 66);
//   ellipse (width/2, width/2, drumMap /2, drumMap /2)

}



