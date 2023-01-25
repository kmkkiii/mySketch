function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  push();
  translate(width / 2, height / 2);

  let rand = Math.floor(Math.random() * 10);
  let d = 6;
  let num = 1800;

  noStroke();

  for (let j = 1; j <= 7; j++) {
    fill(255, 40 * j, 5);

    for (let i = 0; i < num; i++) {
      let R = 40 + 20 * j + rand + 30 * abs(sin(radians(i * 3)));
      let x = R * cos(radians((360 * i) / num));
      let y = R * sin(radians((360 * i) / num));

      circle(x, y, d);
    }
  }
  pop();
}
