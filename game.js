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
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const snake = new Snake()
})();