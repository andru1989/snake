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
    }

    draw(){
      this.head.draw()
    }

    right(){
      this.head.x += 10
    }
    left(){
      this.head.x -= 10
    }
    up(){
      this.head.y -= 10
    }
    down(){
      this.head.y += 10
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const snake = new Snake()

  setInterval(function(){
    snake.right()
    // Borra el cuadrado de acuerdo a la coordenada x, y
    // n cantidad de pixeles hacia la derecha y hacia abajo
    ctx.clearRect(0,0,canvas.width, canvas.height)
    snake.draw()
  }, 1000 / 10)

})();