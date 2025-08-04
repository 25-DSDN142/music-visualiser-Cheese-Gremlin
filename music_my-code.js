
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let Size = map(drum, 0, 100, 100, 400);
    
  //drums
  strokeWeight (Size/10);
  stroke (73, 56, 255);
  
if (Size > 200){
   fill (235, 49, 204);
   ellipse (100, 100, drum*2, drum*2)
   ellipse (400, 400, drum*2, drum*2)
   }

  fill (255);
  ellipse (250, 250, Size, Size);

  
  fill (66, 245, 66);
  ellipse (250, 250, Size /2, Size /2)

  








}