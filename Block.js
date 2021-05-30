class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      this.visibility = 255
      World.add(world, this.body);
    }
    display(){
      push()
      
      if(this.body.speed <3){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world,this.body)  
        this.visibility = this.visibility - 5
        tint(225,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,40)
        pop()
      }
    }
    }
  

  
