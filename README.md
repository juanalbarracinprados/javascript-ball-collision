[![Build Status](https://www.prokom.es/tryit.svg)](https://juanalbarracin.com)


2D Ball Collision Javascript
----

Javascript based 2d physics inside a canvas, hardware accelerated.
It's an experimental project to test the limits of canvas rendering, having some fun.

![javascript balls working](https://www.prokom.es/balls.png)

There's 3 main javascript files:
+ Ball.js: The ball prototype, which contains all the necessary variables and methods to define and animate the ball.
+ Vector.js: Vector prototype, used by Ball.js
+ animation.js: Contains all the methods used to update and draw the canvas.

The rest of the configuration is inside index.html, because these paremeters depends on the project's specific functionality.

The var total inside index.html defines how many balls you want to start, once running you can add more balls this way:

1. Click and drag to define radius
2. Click and drag again to define initial speed and direction
3. Release and shoot!
