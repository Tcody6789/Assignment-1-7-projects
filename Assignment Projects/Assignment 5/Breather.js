class Breather {   

    constructor() { 
      // Initialize variables randomly
      // Location and size
      this.x = random(width);
      this.y = random(height);  
      this.rad = random(6, 24);
      // Angle for oscillation
      this.theta = random(PI);  
      this.dtheta = random(0.01, 0.1);
       
  
      // Increment theta
      this.breath = function() {
        this.theta += this.dtheta;
      };   
  
      this.display = function() { 
        // Map size based on sine function  
        let r = this.rad + this.rad * (sin(this.theta) + 1);
        // Display circle
        fill(175, 100);
        stroke(0);
        ellipse(this.x, this.y, r, r);
      };
    }   
  }
  
  