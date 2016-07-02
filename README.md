[![Build Status](http://runbot.odoo.com/runbot/badge/flat/1/9.0.svg)](https://juanalbarracin.com)


2D Ball Collision Javascript
----

Javascript based 2d physics inside a canvas, hardware accelerated.
It's an experimental project to test the limits of canvas rendering, having some fun.

There's 3 main javascript files:
+ Ball.js: The ball prototype, which contains all the necessary variables and methods to define and animate the ball.
+ Vector.js: Vector prototype, used by Ball.js
+ animation.js: Contains all the methods used to update and draw the canvas.

The rest of the configuration is inside index.html, because these paremeters depends on the project's specific functionality.
