class Snake{
    constructor() {
        this.body = []
        this.body[0] = createSprite(200,200,20,20);
        this.dirx = 0;
        this.diry = 0;
        this.blocklength = 0;
    }

    setDirection(x,y) {
        this.dirx = x;
        this.diry = y;
    }

    updateSnake(){
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.dirx;
        head.y += this.diry;
    }

    growSnake(){
        let head = this.body[this.body.length-1].copy();
        this.blocklength++;
        this.body.push(head);
    }

    endGame() {
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
        }
        return false;
      }

    
    eat(pos) {
        let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        this.growSnake();
        return true;
      }
      return false;
    }
  
  }