let x = 180
let y = 460

let o = 40
let p = 100

let a;
let b = 40

let xballSpeed = 2
let yballSpeed = 4
let xSpeed = 4

let score = document.getElementById('score')
let scoreCount;


function setup() {
  // put setup code here
  createCanvas(500, 500)
  a = random(40, 460)
  scoreCount = 0
  
  
}

function draw() {
  // put drawing code here
  background(70)
  
  
  //scoreCount = 0
  
  rect(x, y, 80, 30)
  rect(o, p, 80, 30)
  ellipse(a, b, 40)
  

  moveBall()
  checkBounce()
  checkWallBounce()
  
  
  
  if (keyIsDown(LEFT_ARROW)){

    if (x < 1){
      x = 0
    }

    else{
      x = x - xSpeed
    }
  }

  if (keyIsDown(RIGHT_ARROW)){

    if (x > 419){
      x = 420
    }

    else{
      x = x + xSpeed
    }
  }

  
}

function moveBall(){
  a = a + xballSpeed 
  b = b + yballSpeed
  
}

function checkBounce(){
  if (b+20 === y && x-30<= a && a <= x+100){
    
    yballSpeed = yballSpeed * -1
    incrementScore()
    score.innerText = scoreCount
    
  }
  
  
  
}

function checkWallBounce(){
  if (a > width || a < 0){
    xballSpeed = xballSpeed * -1
  }
  if (b < 0){
    yballSpeed = yballSpeed * -1
  }
  if (b > height){
    yballSpeed = 0
    xballSpeed = 0
  }
  if (b-30 === p && o <= a && a <= o+80){
    console.log('MET1')
    yballSpeed = yballSpeed * -1
  }

  if (b === p+30 && a >= o && a <= o+80){
      console.log('MET2')
    yballSpeed = yballSpeed * -1
  } 
  

  
}

function incrementScore(){
  scoreCount += 10;
  yballSpeed = yballSpeed * 1.045
  xSpeed = xSpeed * 1.025
  xballSpeed = xballSpeed * 1.035
}
