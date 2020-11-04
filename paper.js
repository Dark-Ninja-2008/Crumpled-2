class Paper{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.2 ,
            isStatic:false
        }
        this.x = x
        this.y= y
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, 100, 100);
        pop();
      }
}