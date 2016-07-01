/*
Author:      Juan Albarracín <aprados.juan@gmail.com>
Name:        Vector.js
Description: 2d Vector definition and methods necessary for the ball colliding calculations.
*/
function Vector (x,y) {
	this.x = x;
	this.y = y;
	Vector.prototype.mod = function (){this.module=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));return this.module;}
	Vector.prototype.add = function (v){this.x+=v.x;this.y+=v.y;}
	Vector.prototype.add2 = function (x,y){this.x+=x;this.y+=y;}
	Vector.prototype.sub = function (v){this.x-=v.x;this.y-=v.y;}
	Vector.prototype.dot = function (s){this.x*=s;this.y*=s;}
	Vector.prototype.setxy = function(x,y){this.x=x,this.y=y;}
	Vector.prototype.dist = function(v){return Math.sqrt(Math.pow(v.x-this.x,2)+Math.pow(v.y-this.y,2));}
}
