// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 500);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(82, 100, 100, 100, QUARTER_PI*5, QUARTER_PI);

X=6,Y=3
  strokeWeight(0);
  fill(14, 47, 146);
  circle(300,100,100);
  fill(255,255,255);
  circle(294,95,94);
  fill(22, 131, 46);
  circle(300-Y,100-X,83);
  fill(255,255,255);
  circle(297-Y,106-X,78);
  fill(77);
  textSize(20);
  textFont("Georgia");
  text("KOBE", 267, 90);
  textSize(10);
  text("UNIVERSITY", 270, 105);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
