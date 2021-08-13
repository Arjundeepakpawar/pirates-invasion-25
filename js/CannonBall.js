class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);
    this.trajectory = [];
    this.image = loadImage("./assets/cannonball.png");
    this.tower = loadImage("./assets/gray.jpg");
    World.add(world, this.body);
  }

  //shooting the cannonball
  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();


    //getting the positions of ball and pushing them in the trajectory array
    if (this.body.velocity.x > 0 && this.body.position.x > 300) {

    // inside the code to capture the positions we’ll create a
    //new array called as position and put the positions inside it.

      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    
    //All we need to do is to draw the image on the positions
    //stored in the trajectory array.
    //to use a for loop to get all the values inside the
    //trajectory array and draw an image on it.



     // setting image to the trajectory
     for (var i = 0; i < this.trajectory.length; i++) {
     image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}



/*To draw the trajectory line first we’ll need all the positions
that the ball has traveled to. Then we can draw the
lines/image to create the trajectory line.We’ll start to collect the positions from the current positions
of the cannonball.*/
