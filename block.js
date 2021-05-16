class Block{
    constructor(x, y, width, height) {
        var options = {
        'restitution' : 0.4,
        'friction' : 0.3,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
        this.Visibilty = 255;
      }
      display(){
        if(this.body.speed<3){
         ;
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        }
        else{
          World.remove(world,this.body)
    var angle = this.body.angle;
          var pos= this.body.position;
          push();
          this.Visibilty= this.Visibilty-5;
          tint(255,this.Visibilty);
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
      }
}
