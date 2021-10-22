// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle(cx, cy, black, maxR);　//一番外の円
  drawArcs(cx, cy, green, red, maxR*0.8) //一番外側の赤緑
  drawArcs(cx, cy, cream, black, maxR*0.75)
  drawArcs(cx, cy, green, red, maxR*0.5)
  drawArcs(cx, cy, cream, black, maxR*0.45)
  drawCircle(cx, cy, green, maxR*0.1);　//二番目の円
  drawCircle(cx, cy, red, maxR * 0.05);　//三番目の円
  number(20,192,28)
  number(1,250,39)
  number(18,297,68)
  number(4,340,109)
  number(13,360,160)
  number(6,373,211)
  number(10,360,265)
  number(15,335,311)
  number(2,297,357)
  number(17,240,380)
  number(3,190,385)
  number(19,129,375)
  number(7,90,351)
  number(16,40,311)
  number(8,25,260)
  number(11,9,205)
  number(14,20,153)
  number(9,49,103)
  number(12,85,60)
  number(5,143,37)
  number
}

function drawCircle(x, y, c, r){
  fill(c);
  ellipse(x, y, r, r);
}

function drawArcs(x, y, c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = (TWO_PI / 20 * i)-PI*(1/(7.));
    let stop = TWO_PI / 20 * (i + 1)-PI*(1/(7));
    if(i % 2 == 1){
      fill(c1);
    }else{
      fill(c2);
  }
    arc(x, y, r, r, start, stop, PIE);
  }
}

function number(a,x,y){
  fill(255);
  textSize(23);
  textFont("Times New Roman")
  text(a,x,y)
}
