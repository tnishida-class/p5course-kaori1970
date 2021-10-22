// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if( (i + j) % 2 == 1){
        fill("gray");
      }else{
        fill(255,255,255);
      }
      rect(size*i,size*j,25,25);

      if((i + j) % 2 == 1){
      if(j<3){
        fill(255,0,0);
        ellipse(size*i+(25/2),size*j+(25/2),23);
      }else if (j>4) {
        fill("#000000");
        ellipse(size*i+(25/2),size*j+(25/2),23);
      }
    }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
