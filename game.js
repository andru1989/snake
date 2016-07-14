;(function(){

  class Square{
    constructor(x,y){
      this.x = x
      this.y = y
    }

    draw(){
      ctx.fillRect(this.x,this.y,10,10)
    }
  }

  class Snake{
    constructor(){
      this.head = new Square(100,0)
      this.draw()
      this.direction = 'right'
    }

    draw(){
      this.head.draw()
    }

    right(){
      this.direction = 'right'
    }
    left(){
      this.direction = 'left'
    }
    up(){
      this.direction = 'up'
    }
    down(){
      this.direction = 'down'
    }
    move(){
      if(this.direction === 'up') return this.head.y -= 10
      if(this.direction === 'down') return this.head.y += 10
      if(this.direction === 'left') return this.head.x -= 10
      if(this.direction === 'right') return this.head.x += 10
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const snake = new Snake()

  window.addEventListener('keydown', function(ev){
    if(ev.keyCode === 40) return snake.down();
    if(ev.keyCode === 39) return snake.right();
    if(ev.keyCode === 38) return snake.up();
    if(ev.keyCode === 37) return snake.left();
  })

  setInterval(function(){
    snake.move()
    // Borra el cuadrado de acuerdo a la coordenada x, y
    // n cantidad de pixeles hacia la derecha y hacia abajo
    ctx.clearRect(0,0,canvas.width, canvas.height)
    snake.draw()
  }, 1000 / 10)

})();