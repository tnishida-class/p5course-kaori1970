// 小手調べ

function setup(){
  noFill();
  createCanvas(200,200);
  for(let i = 1; i < 11; i++){
    if(i<=5){
      stroke(0, 0, 255);
    }else{
      stroke(255, 0, 0);
    }
    ellipse(100,100,i*10);
  }
}
