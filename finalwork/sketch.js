var balls = [];

function setup() {
  frameRate(120);
  createCanvas(windowWidth, windowHeight);
  let w = width;
  let h = height;

  for (let i = 0; i < 1; i++) {
    balls.push({
      x: 0.5 * w,
      y: 0.9 * h,
      vx: 0,
      vy: 0,
      color: { r: 225, g: 225, b: 225 },
    });
  }
  for (let i = 0; i < 1; i++) {
    balls.push({
      x: 0.5 * w,
      y: 0.5 * h,
      vx: 0,
      vy: 0,
      color: { r: 0, g: 0, b: 150 },
    });
  }
  for (let i = 0; i < 2; i++) {
    balls.push({
      x: 0.5 * w - 15 + 35 * i,
      y: 0.5 * h - 33,
      vx: 0,
      vy: 0,
      color: { r: 0, g: 0, b: 150 },
    });
  }
  for (let i = 0; i < 3; i++) {
    balls.push({
      x: 0.5 * w - 32 + 35 * i,
      y: 0.5 * h - 66,
      vx: 0,
      vy: 0,
      color: { r: 0, g: 0, b: 150 },
    });
  }
  for (let i = 0; i < 4; i++) {
    balls.push({
      x: 0.5 * w - 48 + 35 * i,
      y: 0.5 * h - 99,
      vx: 0,
      vy: 0,
      color: { r: 0, g: 0, b: 150 },
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let score = 0;

function draw() {
  let w = width;
  let h = height;
  background(0, 70, 0);
  noStroke();

  for (i = 0; i < 2; i++) {
    for (j = 0; j < 3; j++) {
      push();
      fill(0);
      circle(w * i, 0.5 * j * h, 40);
      pop();
    }
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      fill(balls[i].color.r, balls[i].color.g, balls[i].color.b);
      circle(balls[i].x, balls[i].y, 30);

      let nx = balls[i].x - balls[j].x;
      let ny = balls[i].y - balls[j].y;
      let n = sqrt(
        (balls[i].x - balls[j].x) ** 2 + (balls[i].y - balls[j].y) ** 2
      );
      let Nx = nx * (1 / n);
      let Ny = ny * (1 / n);
      let v = sqrt(balls[i].vx ** 2 + balls[i].vy ** 2);
      let dot = -balls[i].vx * nx - balls[i].vy * ny;
      let cos = dot / (n * v);
      let n2x = Nx * v * cos;
      let rx = balls[i].vx + 2 * n2x;
      let n2y = Ny * v * cos;
      let ry = balls[i].vy + 2 * n2y;
      let nx2 = balls[j].x - balls[i].x;
      let ny2 = balls[j].y - balls[i].y;
      let Nx2 = nx2 * (1 / n);
      let Ny2 = ny2 * (1 / n);
      let v2 = sqrt(balls[j].vx ** 2 + balls[j].vy ** 2);
      let dot2 = -balls[j].vx * nx2 + -balls[j].vy * ny2;
      let cos2 = dot2 / (n * v2);
      let n2x2 = Nx2 * v2 * cos2;
      let n2y2 = Ny2 * v2 * cos2;
      let rx2 = balls[j].vx + 2 * n2x2;
      let ry2 = balls[j].vy + 2 * n2y2;

      balls[i].vx = zetteiti(balls[i].vx);
      balls[i].vy = zetteiti(balls[i].vy);
      balls[i].x = balls[i].x + balls[i].vx;
      balls[i].y = balls[i].y + balls[i].vy;

      if (balls[i].x < 0 || balls[i].x > width) {
        balls[i].vx = zetteiti(balls[i].vx * -1);
        balls[i].x = balls[i].x + balls[i].vx;
      }
      if (balls[i].y < 0 || balls[i].y > height) {
        balls[i].vy = zetteiti(balls[i].vy * -1);
        balls[i].y = balls[i].y + balls[i].vy;
      }
      if(
        sqrt((balls[i].x - balls[j].x) ** 2 + (balls[i].y - balls[j].y) ** 2) <
          30 &&
        i !== j &&
        balls[i].vx ** 2 + balls[i].vy ** 2 !== 0 &&
        balls[j].vx ** 2 + balls[j].vy ** 2 !== 0
      ) {
        balls[i].vx = zetteiti(rx);
        balls[i].vy = zetteiti(ry);
        balls[j].vx = zetteiti(rx2);
        balls[j].vy = zetteiti(ry2);
        balls[i].x = balls[i].x + balls[i].vx;
        balls[i].y = balls[i].y + balls[i].vy;
        balls[j].x = balls[j].x + balls[j].vx;
        balls[j].y = balls[j].y + balls[j].vy;
      } else if (
        sqrt((balls[i].x - balls[j].x) ** 2 + (balls[i].y - balls[j].y) ** 2) <
          30 &&
        i !== j &&
        balls[i].vx ** 2 + balls[i].vy ** 2 == 0
      ) {
        balls[i].vx = zetteiti(nx * v2 * (1 / n));
        balls[i].vy = zetteiti(ny * v2 * (1 / n));
        balls[j].vx = zetteiti(rx2);
        balls[j].vy = zetteiti(ry2);
        balls[i].x = balls[i].x + balls[i].vx;
        balls[i].y = balls[i].y + balls[i].vy;
        balls[j].x = balls[j].x + balls[j].vx;
        balls[j].y = balls[j].y + balls[j].vy;
      } else if (
        sqrt((balls[i].x - balls[j].x) ** 2 + (balls[i].y - balls[j].y) ** 2) <
          30 &&
        i !== j &&
        balls[j].vx ** 2 + balls[j].vy ** 2 == 0
      ) {
        balls[j].vx = zetteiti(nx2 * v * (1 / n));
        balls[j].vy = zetteiti(ny2 * v * (1 / n));
        balls[i].vx = zetteiti(rx);
        balls[i].vy = zetteiti(ry);
        balls[i].x = balls[i].x + balls[i].vx;
        balls[i].y = balls[i].y + balls[i].vy;
        balls[j].x = balls[j].x + balls[j].vx;
        balls[j].y = balls[j].y + balls[j].vy;
      }
      balls[j].vx = constrain(balls[j].vx, -1.2, 1.2);
      balls[j].vy = constrain(balls[j].vy, -1.2, 1.2);
    }

    if (
      dist(0, 0, balls[i].x, balls[i].y) < 20 ||
      dist(0, 0.5 * h, balls[i].x, balls[i].y) < 20 ||
      dist(0, h, balls[i].x, balls[i].y) < 20 ||
      dist(w, 0, balls[i].x, balls[i].y) < 20 ||
      dist(w, 0.5 * h, balls[i].x, balls[i].y) < 20 ||
      dist(w, h, balls[i].x, balls[i].y) < 20
    ) {
      balls[i].x = -50;
      balls[i].y = -50;
      balls[i].vx = 0;
      balls[i].vy = 0;
      score = score + i;
    }

    if (score == 55) {
      push();
      balls[0].vx = 0;
      balls[0].vy = 0;
      fill(225);
      textSize(80);
      text("GAMECLEAR", 0.23 * w, 0.5 * h);
      pop();
    }

    if (balls[0].x < -40) {
      push();
      fill(225);
      textSize(80);
      text("GAMEOVER", 0.23 * w, 0.5 * h);
      for (i = 1; i < 11; i++) {
        balls[i].vx = 0;
        balls[i].vy = 0;
        balls[i].color = { r: 0, g: 70, b: 0 };
      }
      pop();
    }

    if (balls[0].x >= 0) {
      textSize(10);
      fill(225);
      text(i, balls[i].x - 3.5, balls[i].y + 1);
    } else if (balls[0].x < -10) {
       break;
    }
    fill(225);
    textSize(41);
    text(score, 0.5 * w, 40);
  }
}

function keyPressed() {
  h = height;
  w = width;
  if (key == " ") {
    for (let i = 0; i < 1; i++) {
      balls[i].x = 0.5 * w;
      balls[i].y = 0.9 * h;
      balls[i].vx = 0;
      balls[i].vy = 0;
      balls[i].color = { r: 225, g: 225, b: 225 };
    }
    for (let i = 1; i < 2; i++) {
      balls[i].x = 0.5 * w;
      balls[i].y = 0.5 * h;
      balls[i].vx = 0;
      balls[i].vy = 0;
      balls[i].color = { r: 0, g: 0, b: 150 };
    }
    for (let i = 2; i < 4; i++) {
      (balls[i].x = 0.5 * w - 84.6  + 35 * i),
        (balls[i].y = 0.5 * h - 33),
        (balls[i].vx = 0);
      balls[i].vy = 0;
      balls[i].color = { r: 0, g: 0, b: 150 };
    }
    for (let i = 4; i < 7; i++) {
      (balls[i].x = 0.5 * w - 172 + 35 * i),
        (balls[i].y = 0.5 * h - 66),
        (balls[i].vx = 0);
      balls[i].vy = 0;
      balls[i].color = { r: 0, g: 0, b: 150 };
    }
    for (let i = 7; i < 11; i++) {
      (balls[i].x = 0.5 * w - 293 + 35 * i),
        (balls[i].y = 0.5 * h - 99),
        (balls[i].vx = 0),
        (balls[i].vy = 0),
        (balls[i].color = { r: 0, g: 0, b: 150 });
    }
  }
  score = 0;
}

function mouseClicked() {
  if (balls[0].vy == 0 && balls[0].vx == 0) {
    let b = sqrt((mouseX - balls[0].x)**2+(mouseY - balls[0].y)**2);
    balls[0].vx = 1.3*(mouseX - balls[0].x)/b;
    balls[0].vy = 1.3*(mouseY - balls[0].y)/b;
  }
}

function zetteiti(a) {
  if (a == 0) {
    return 0;
  } else if (a >= 0.03) {
    let b = a - 0.0003;
    return b;
  } else if (a <= -0.03) {
    let b = a + 0.0003;
    return b;
  } else if (a > 0 && a < 0.03) {
    return 0;
  } else if (a < 0 && a > -0.03) {
    return 0;
  }
}
