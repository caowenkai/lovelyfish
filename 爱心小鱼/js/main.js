var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();
var canWidth;
var canHeight;
var ane;
var fruit;

document.body.onload = game;
//body加载完以后把game作为所有脚本的入口
function game(){
	init();
	lastTime =Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获得canvas context
	can1 = document.getElementById('canvas1');
	//fishes,dust,UI,circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');
	ctx2 = can2.getContext('2d');
	
	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
}
//getContext()方法里面要写2d

function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval, setTimeout
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
}
