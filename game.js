;(function(){

  class Square{
    constructor(x,y){
      this.x = x
      this.y = y
      this.back = null // last square
    }

    draw(){
      ctx.fillRect(this.x,this.y,10,10)
      if(this.hasBack()){
        this.back.draw()
      }
    }

    add(){
      if(this.hasBack()) return this.back.add()
      this.back = new Square(this.x,this.y)
    }

    hasBack(){
      return this.back !== null
    }

    copy(){
      if(this.hasBack()){
        this.back.copy()
        this.back.x = this.x
        this.back.y = this.y
      }
    }

    right(){
      this.copy()
      this.x += 10
    }
    left(){
      this.copy()
      this.x -= 10
    }
    up(){
      this.copy()
      this.y -= 10
    }
    down(){
      this.copy()
      this.y += 10
    }
  }

  class Snake{
    constructor(){
      this.head = new Square(100,0)
      this.draw()
      this.direction = 'right'
      this.head.add()
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
      if(this.direction === 'up') return this.head.up()
      if(this.direction === 'down') return this.head.down()
      if(this.direction === 'left') return this.head.left()
      if(this.direction === 'right') return this.head.right()
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const snake = new Snake()

  window.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if(ev.keyCode === 40) return snake.down();
    if(ev.keyCode === 39) return snake.right();
    if(ev.keyCode === 38) return snake.up();
    if(ev.keyCode === 37) return snake.left();

    return false
  })

  setInterval(function(){
    snake.move()
    // Borra el cuadrado de acuerdo a la coordenada x, y
    // n cantidad de pixeles hacia la derecha y hacia abajo
    ctx.clearRect(0,0,canvas.width, canvas.height)
    snake.draw()
  }, 1000 / 10)

})();