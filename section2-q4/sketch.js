// ギリシャ国旗
function setup() {
  const blue = color(5, 80, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i%2==0){
    fill(blue)
  }else{
    fill(255)
  }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(40,0,d,size);
  rect(0,40,size,d)
}
