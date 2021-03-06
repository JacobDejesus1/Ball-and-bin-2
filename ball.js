class Ball{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.15,
            isStatic: false
        }
    
        this.body = Bodies.circle(x, y,r/2,options)
        this.image = loadImage("paper.png")
        this.r = r;
      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("purple");
        image(this.image,0, 0, this.r,this.r);
        pop();
      }
}