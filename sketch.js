function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(247);

  let d = 10;
  let num = 360;

  push();
  translate(width / 2, height / 2);

  noStroke();

  for (let j = 1; j <= 5; j++) {
    fill(50 * j, 100, 200);

    for (let i =0; i < num; i++) {
      let R = (40 + 25 * j) + 30 * abs(sin(radians(i * 3)));
      let x = R * cos(radians(360 * i /num));
      let y = R * sin(radians(360 * i /num));

      circle(x, y, d);
    }
  }

  pop();
}
