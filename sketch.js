let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;

let Score = 0; 

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100);
}

function draw() {
  background(0);

  fill(255, 0, 0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(65)) {
    myXPos -= 3;
  }

  if (keyIsDown(68)) {
    myXPos += 3;
  }

  if (keyIsDown(87)) {
    myYPos -= 3;
  }

  if (keyIsDown(83)) {
    myYPos += 3;
  }

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);

  if (distance <= (mySize / 2) + (enemySize / 2)) {
    fill(random(255), random(255), random(255));

    Score++
   
  }
  fill(255,255,255)
  textSize(20)
  text("Score: " + Score, 30, 30 )
}