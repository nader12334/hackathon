const init = function(){
  const ball = document.createElement("div"); 
  ball.className = 'ball'
  document.body.appendChild(ball);
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

  const greenball = document.createElement('div');
  greenball.className = 'ball2';
  document.body.appendChild(greenball);

  const yellowBall = document.createElement('div');
  yellowBall.className = 'ball3';
  document.body.appendChild(yellowBall);

  const allDivs = document.querySelectorAll('div');
  console.log(allDivs)

  document.body.addEventListener('keypress', function(e){
    if(e.key === 's') {
      for(div of allDivs){
        div.style.filter = 'sepia(60%)'
      }
    }
    if (e.key === 't'){
      for (div of allDivs){
        div.style.transform = ('rotate(3deg)')
      }
      if (e.target = ball){
        let randX = Math.floor(Math.random() * 1000)
        let randY = Math.floor(Math.random() * 1000)
        ball.style.top = randX + 'px'
        ball.style.left = randY + 'px'
      } 
      if(e.target = greenball){
        let randX = Math.floor(Math.random() * 1000)
        let randY = Math.floor(Math.random() * 1000)
        greenball.style.top = randX + 'px'
        greenball.style.left = randY + 'px'
      } 
      if(e.target = yellowBall){
        let randX = Math.floor(Math.random() * 1000)
        let randY = Math.floor(Math.random() * 1000)
        yellowBall.style.top = randX + 'px'
        yellowBall.style.left = randY + 'px'
      }
  }
  })

  document.body.addEventListener('click', function(e){
    console.log(e)
    if (e.ctrlKey){
      e.target.style.transition = '2000ms'
      e.target.style.filter = 'blur(10px)'
    }

    if (e.target === ball) {
      console.log('clicked the ball')
      let randX = Math.floor(Math.random() * 1000)
      let randY = Math.floor(Math.random() * 1000)
      ball.style.top = randX + 'px'
      ball.style.left = randY + 'px'
    } 
    if (e.target === greenball) {
      let randX = Math.floor(Math.random() * 200)
      let randY = Math.floor(Math.random() * 200)
      greenball.style.height = randX + 'px'
      greenball.style.width = randY + 'px'
    }

    if (e.shiftKey) {
      let randX = Math.floor(Math.random() * 200)
      let randY = Math.floor(Math.random() * 200)
      yellowBall.style.top = e.y-64  + 'px'
      yellowBall.style.left = e.x-64 + 'px'
    }
  })
}
init()

// click each one
// hover each one
//shift click for yellow to follow
//ctrl click to blur specific element
// 't' to tilt screen