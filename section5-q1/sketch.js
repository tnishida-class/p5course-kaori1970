// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(0,60,20,17,100, "I lo");
}

function balloon(r, g, b, x, y, t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(r,g,b);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x+p, y+h + p);
  fill(255,0,0);
  fill(r,g,b);
  triangle(x,y+h+p*2-1/1100*height,x+1/6*(x+w+p*2),y+h+p*2-1/1100*height,1/4*(3*x+(x+1/6*(x+w+p*2))),y+h+p*2+1/30*height);
  stroke(r,g,b);
  line(x,y+h+p*2-1/1100*height,x+1/6*(x+w+p*2),y+h+p*2-1/1100*height);
}
