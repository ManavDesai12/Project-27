class Bob {
    constructor(x, y) {
      var options = {
        'isSatic': false,
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
      };
      this.radius = 100;
      this.body = Bodies.circle(x, y, this.radius/2, options);
      this.body.scale = 0.25;
      this.body.debug = true;
      World.add(world, this.body);


    };
    display(){
      var pos = this.body.position;

      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('pink')
      imageMode(CENTER)
      circle(0, 0, this.radius);
      pop();
    };
  };