
			var mouseReleased = true;
			var mouseState = 0;
			var stage = document.getElementById('stage');
			var drawingCanvas = document.getElementById('stage');
			var browserX = window.screenX;
			var browserY = window.screenY;
			var balls = [];
			var total = 100;
			var rozamiento = .98;
			var currentDrag = null;
			var mousePos = new Vector(0,0);
			var mouseStart = new Vector(0,0);
			var stageWidth = $(document).width();
			var stageHeight = $(document).height();
			var keyForce = {
		        up: 0,
		        down: 0,
		        left: 0,
		        right: 0
		    }
			stage.width = $(document).width();
			stage.height = $(document).height();
			if(drawingCanvas.getContext)
			{
				var context = drawingCanvas.getContext('2d');
				requestAnimationFrame(render);
			}
			var IE = document.all ? true : false;
			if(!IE) document.addEventListener(Event.MOUSEMOVE, getMouseXY, false);
			document.onmousemove = getMouseXY;
			
			window.onresize = function(event)
			{
				stage.width = 10;
				stage.width = $(document).width();
			}
			
			generate();
			
			jQuery(document).ready(function()
			{
				$(document).mousedown(function(e)
				{
					onMouseDown();
				});
				$(document).keydown(function(e)
				{
					onKeyDown(e);
				});
				$(document).keyup(function(e)
				{
					onKeyUp(e);
				});
				$(document).mouseup(function(e)
				{
					onMouseUp();
				}); 
			})

			function onMouseDown()
			{
				if (mouseState==0){
					mouseStart.setxy(mousePos.x,mousePos.y);
					mouseBall=new Ball(mousePos.x,mousePos.y,0,0,2);
					mouseState=1;
				}else if(mouseState==2){
					mouseState=3;
				}
			}
			
			function onMouseUp()
			{
				if (mouseState==1){
					mouseState=2;
				}else if(mouseState==3){
					mouseBall.vel.setxy((mouseStart.x-mousePos.x)*.2,(mouseStart.y-mousePos.y)*.2);
					balls.push(mouseBall);
					mouseBall=null;
					mouseState=0;
				}
			}
			
			function onKeyDown(e)
			{
				console.log(e);
				if (e.keyCode==37)
			      keyForce.left=1;
			    else if(e.keyCode==38)
			      keyForce.up=1;
			    else if(e.keyCode==39)
			      keyForce.right=1;
			    else if(e.keyCode==40)
			      keyForce.down=1;

			}
			function onKeyUp(e)
			{
				if (e.keyCode==37)
			      keyForce.left=0;
			    else if(e.keyCode==38)
			      keyForce.up=0;
			    else if(e.keyCode==39)
			      keyForce.right=0;
			    else if(e.keyCode==40)
			      keyForce.down=0;
			}
			function generate()
			{
				for(var i = 0; i < total; i++)
				{
					balls.push(new Ball(Math.random() * stage.width,Math.random() * stage.height,Math.random() * 50 - 25,Math.random() * 50 - 25,2+Math.random()*20));
				}
			}
			function getMouseXY(e)
			{
  				if(IE)
  				{
  					mousePos.x = event.clientX + document.body.scrollLeft
  					mousePos.y = event.clientY + document.body.scrollTop - $("#stage").position().top
  				}
  				else
  				{
  					mousePos.x = e.pageX
  					mousePos.y = e.pageY - $("#stage").position().top
  				}
  				if(mousePos.x < 0) {mousePos.x = 0;}
  				if(mousePos.y < 0) {mousePos.y = 0;}  
  				return true;
			}
