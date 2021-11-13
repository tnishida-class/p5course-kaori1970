// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(windowWidth, windowHeight);
  const a = ["日", "月", "火", "水", "木", "金", "土"];

//dayOfWeek(1981,7,17);
  // isLeapYear の動作確認のため console に出力しています
//for(let i = 2000; i <= 2100; i++){
  //  daysInYear(i)
  //  if(isLeapYear(i)){
//      console.log(i + "年はうるう年です");
//    }
//    else{
//      console.log(i + "年はうるう年ではありません");
//    }
//  }s
kousizyou();
itiretume();
calendar(1703, 9);

}



function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let e = 1;
  for(let d = 1; d <= daysInMonth(y, m); d++){
    if(dayOfWeek(y,m,d) % 7 == 0 && d == 1){
      e = 1;
    }else if(dayOfWeek(y,m,d) % 7 == 0){
      e = e +1;
    }

    if( dayOfWeek(y,m,d) % 7 == 0){
      stroke(255,0,0);
    }else if( dayOfWeek(y,m,d) % 7 == 6){
      stroke(0,0,225);
    }else {
      stroke(0);
    }
    text(d, dayOfWeek(y,m,d)*1/14*width+1/42*width, 1/23*height+e*1/14*height)
  }
  stroke(0);
  text(`${y}年${m}月`, 2.5*1/14*width+1/42*width, 16/28*height,);
}

function itiretume(){
  for(i=0; i<=6; i++){
    if(i == 0){
      stroke(255, 0, 0);
    }else if(i == 6){
      stroke(0, 0, 225);
    }else{
      stroke(0);
    }
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  text(a[i], i*1/14*width+1/42*width, 1/23*height, );
   }
}


function kousizyou(){
  for(let i = 0; i <=7; i++){
    line(1/14*width*i, 0, 1/14*width*i, 1/2*height);
    line(0,1/14*i*height,1/2*width,1/14*i*height);
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(isLeapYear(y)){
    console.log("366");
    return 366;
  }else{
    console.log("365");
    return 365;
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  a = 0;
  b = 0;
  c = 0;
  e = 0;
  for(i=1640; i<y; i++){
    a = a + daysInYear(i);
  }
  for(i=1; i<m; i++){
    b = b + daysInMonth(y,i);
}
  c = a + b + d - 1;
  e = c % 7;
  console.log(e);
  return e;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
