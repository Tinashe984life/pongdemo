let msg = document.getElementById('message')
let pnts = document.getElementById('pnts')
const hs = document.getElementById('highscore')

let currentHighScore = 200;

let x = 180
let y = 460

let o = 300
let p = 100

let q = 80
let r = 100

let a
let b = 40

let c
let d = 40


let xballSpeed = 2
let yballSpeed = 4
let cballSpeed = 1
let dballSpeed = 2
let xSpeed = 4

let oSpeed = 2
let qSpeed = 2

let score = document.getElementById('score')
let scoreCount;


function setup() {
  // put setup code here
  createCanvas(500, 500)
  

  a = random(40, 460)
  c = random(40, 460)
  scoreCount = 0
  
  
}

function draw() {
  // put drawing code here
  background(70)
  
  
  //scoreCount = 0
  
  rect(x, y, 80, 30)
  //rect(o, p, 80, 40)
  //rect(q, r, 80, 40)
  ellipse(a, b, 40)
  ellipse(c,d, 40)
  

  moveBall()
  checkBounce()
  checkWallBounce()

  /*setInterval(()=>{
    moveBall2()
  }, 1000)*/

  //moveObjects()
  //checkObjectHit()
  

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
  c = c + cballSpeed 
  d = d + dballSpeed 
  console.log('moving ball');
}

function checkBounce(){
  if (b+20 === y && x-30<= a && a <= x+100){
    
    yballSpeed = yballSpeed * -1
    incrementAScore()
    score.innerText = scoreCount
    
  }
  if (d+20 === y && x-30<= c && c <= x+100){
    
    dballSpeed = dballSpeed * -1
    incrementBScore()
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
    dballSpeed = 0
    cballSpeed = 0
    msg.innerText = 'YOU LOSE!!'
    pnts.value = scoreCount

    if (scoreCount > currentHighScore){
      hs.classList.add('hs2')
    }
  }

  if (c > width || c < 0){
      cballSpeed = cballSpeed * -1
  }
  if (d < 0){
      dballSpeed = dballSpeed * -1
  }
  if (d > height){
    dballSpeed = 0
    cballSpeed = 0
    yballSpeed = 0
    xballSpeed = 0
    msg.innerText = 'YOU LOSE!!'
    pnts.value = scoreCount

    if (scoreCount > currentHighScore){
      hs.classList.add('hs2')
    }
  }
  
  

  
}


//function checkObjectHit(){
     
    //weird but cool glitch

    /*if (b+21>100 && a > o && a < o+80){
        yballSpeed = yballSpeed*-1
    }*/
    
    // working object bounce mechanic

/*    if (b+21>100 && b+21 < 110 && a > o && a < o+80){
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
}*/

/*function moveObjects(){
    
    o = o - oSpeed
    q = q + qSpeed

    if (o < 0 || o+80 > width){
        oSpeed = oSpeed*-1
    }
    if (q < 0 || q+80 > width){
        qSpeed = qSpeed*-1
    }
}*/


function incrementAScore(){
  scoreCount += 5;
  yballSpeed = yballSpeed * 1.020
  xballSpeed = xballSpeed * 1.015
  xSpeed = xSpeed * 1.0125
  
}

function incrementBScore(){
    scoreCount += 5;
    
    cballSpeed = cballSpeed * 1.030
    dballSpeed = dballSpeed * 1.040
    xSpeed = xSpeed * 1.0125
    
  }

/*function moveBall2(){
    c = c + cballSpeed 
    d = d + dballSpeed
}*/