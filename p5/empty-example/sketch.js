let x = 40
let y = 460

let a = 40
let b = 40

let xballSpeed = 2
let yballSpeed = 4

function setup() {
  // put setup code here
  createCanvas(500, 500)
}

function draw() {
  // put drawing code here
  background(70)

  rect(x, y, 80, 30)
  ellipse(a, b, 40)

  moveBall()
  checkBounce()
  checkWallBounce()
  
  if (keyIsDown(LEFT_ARROW)){

    if (x === 0){
      x = 0
    }

    else{
      x = x - 4
    }
  }

  if (keyIsDown(RIGHT_ARROW)){

    if (x === 420){
      x = 420
    }

    else{
      x = x + 4
    }
  }

  
}

function moveBall(){
  a = a + xballSpeed 
  b = b + yballSpeed
}

function checkBounce(){
  if (b+20 === y && x<= a && a <= x+80){
    
    yballSpeed = yballSpeed * -1
    
    
  }
}

function checkWallBounce(){
  if (a > width || a < 0){
    xballSpeed = xballSpeed * -1
  }
  if (b > height || b < 0){
    yballSpeed = yballSpeed * -1
  }
}


/*function keyPressed(){
  if (keyCode === LEFT_ARROW){
    
    
  }
}*/