/*
Author:      Juan Albarracín <aprados.juan@gmail.com>
Name:        Ball.js
Description: 2d Ball definition
*/

function Ball (px, py, vx, vy, radius){
	// Ball properties
	this.elasticity = 0.4;
	this.pos = new Vector(px, py);
	this.vel = new Vector(vx, vy);
	this.color = genColor();
	this.radius = radius;

	function genColor (){
		// Generates a html color randomly
		var hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		var color="";
		for (i=0;i<6;i++){
			color+=hex[Math.round(Math.random()*15)];
		}
		return color;
	}

	Ball.prototype.collideBall = function (b){
		// Collides a ball against another given ball (b), modifying each ball properties (velocity and position)
		var normal = new Vector(b.pos.x-this.pos.x,b.pos.y-this.pos.y);
		var sumRad = this.radius+b.radius;
		var module = normal.mod();
		if(module<sumRad) {
			var res = new Vector ((this.pos.x + normal.x / module * sumRad) - b.pos.x, (this.pos.y + normal.y / module * sumRad) - b.pos.y);
			this.pos.sub(res);
			b.pos.add(res);
			res.dot(this.elasticity);
			this.vel.sub(res);
			b.vel.add(res);
		}
	}
	Ball.prototype.innerCollideBox = function (c){
		/* Collides a ball against a given canvas, modifying its properties (velocity and position). 
		   Also, applies directional gravity in case the user presses the directional keys in his keyboard. */
		if ((this.pos.x + this.radius) > c.width)
		{
			this.pos.x = c.width - this.radius;
			this.vel.x *= -this.elasticity;
		}
		else if((this.pos.x - this.radius) < 0)
		{
			this.pos.x = this.radius;
			this.vel.x *= -this.elasticity;
		}
		
		if ((this.pos.y + this.radius) > c.height)
		{
			this.pos.y = c.height - this.radius;
			this.vel.y *= -this.elasticity;
		}
		else if((this.pos.y - this.radius) < 0)
		{
			this.pos.y = this.radius;
			this.vel.y *= -this.elasticity;
		}
		this.vel.add2(keyForce.right-keyForce.left,keyForce.down-keyForce.up);
		this.vel.dot(rozamiento);
	}
}