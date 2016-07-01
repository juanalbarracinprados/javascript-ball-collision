/*
Author:      Juan Albarracín <aprados.juan@gmail.com>
Name:        animation.js
Description: smooth 2d animation
*/
(
	function() {
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  		window.requestAnimationFrame = requestAnimationFrame;
	}
)
();
function render() {
	var isChange = (browserX != window.screenX || browserY != window.screenY);
	if(isChange)
	{
		var diffX = browserX - window.screenX;
		browserX = window.screenX;
		
		var diffY = browserY - window.screenY;
		browserY = window.screenY;
	}
	updateBalls();
	draw();
	requestAnimationFrame(render);
}
			
function draw() {
	context.clearRect(0, 0, stage.width, stage.height);
	var i = balls.length;
	while(--i > -1)
	{
		context.fillStyle = balls[i].color;
		context.beginPath();
		context.arc(balls[i].pos.x,balls[i].pos.y,balls[i].radius,0,Math.PI*2,true);
		context.closePath();
		context.fill();
	}
	if (mouseState !== 0){
		if (mouseState==1){
			mouseBall.radius=mousePos.dist(mouseStart);
		}else if (mouseState==3){
			context.lineWidth=3;
			context.strokeStyle='#FFF';
			context.beginPath();
			context.moveTo(mouseStart.x,mouseStart.y);
			context.lineTo(mousePos.x,mousePos.y);
			context.stroke();
			mouseBall.pos.setxy(mousePos.x,mousePos.y);
		}
		context.fillStyle = mouseBall.color;
		context.beginPath();
		context.arc(mouseBall.pos.x,mouseBall.pos.y,mouseBall.radius,0,Math.PI*2,true);
		context.closePath();
		context.fill();
		
	}
}
function updateBalls() {
	for (var i = 0; i < balls.length; i++) {
		for (var j = i+1; j < balls.length; j++) {
			balls[i].collideBall(balls[j]);
		}
		balls[i].pos.add(balls[i].vel);
		balls[i].innerCollideBox(stage);
		
	}
}
