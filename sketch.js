function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(247);

  fill(0);
  rect(0, 0, width / 2, height);

  let d = 30;
  let num = 10;

  noStroke();

  push();
  translate(width / 2, height / 2);

  for (let i =0; i < num; i++) {
    let R = 150;
    // ラジアン
    // let x = R * cos(TWO_PI * i /num);
    // let y = R * sin(TWO_PI * i /num);
    // 度数法->ラジアン
    let x = R * cos(radians(360 * i /num));
    let y = R * sin(radians(360 * i /num));

    if (x > 0) {
      fill(0);
    } else {
      fill(247);
    }

    circle(x, y, d);
  }

  pop();
}
