let msg = document.getElementById('message')
let pnts = document.getElementById('pnts')
const hs = document.getElementById('highscore')

let currentHighScore = 300;

let x = 180
let y = 460

let o = 300
let p = 100

let q = 80
let r = 100

let a;
let b = 40

let xballSpeed = 2
let yballSpeed = 4
let xSpeed = 4

let oSpeed = 2
let qSpeed = 2

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
  rect(o, p, 80, 40)
  rect(q, r, 80, 40)
  ellipse(a, b, 40)
  

  moveBall()
  checkBounce()
  checkWallBounce()
  moveObjects()
  checkObjectHit()
  

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
    //console.log('kk')
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
    msg.innerText = 'YOU LOSE!!'
    pnts.value = scoreCount

    if (scoreCount > currentHighScore){
      hs.classList.add('hs2')
    }
  }
  
  

  
}


function checkObjectHit(){
     
    //weird but cool glitch

    /*if (b+21>100 && a > o && a < o+80){
        yballSpeed = yballSpeed*-1
    }*/
    
    // working object bounce mechanic

    if (b+21>100 && b+21 < 110 && a > o && a < o+80){
        yballSpeed = yballSpeed*-1
    }

    if (b<160 && b > 150 && a > o && a < o+80){
        yballSpeed = yballSpeed*-1
    }

    if (b+21>100 && b+21 < 110 && a > q && a < q+60){
        yballSpeed = yballSpeed*-1
    }

    if (b<160 && b > 150 && a > q && a < q+60){
        yballSpeed = yballSpeed*-1
    }
}

function moveObjects(){
    
    o = o - oSpeed
    q = q + qSpeed

    if (o < 0 || o+80 > width){
        oSpeed = oSpeed*-1
    }
    if (q < 0 || q+80 > width){
        qSpeed = qSpeed*-1
    }
}


function incrementScore(){
  scoreCount += 10;
  yballSpeed = yballSpeed * 1.045
  xSpeed = xSpeed * 1.025
  xballSpeed = xballSpeed * 1.035
}