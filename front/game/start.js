var pjs = new PointJS('2d',600,600,{backgroundColor: "#DDDDDD"});
pjs.system.initFullPage();
var game = pjs.game;   
var mouse = pjs.mouseControl;
var key = pjs.keyControl;
var point = pjs.vector.point;
var cam = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var camera = pjs.camera;
var oPos;
key.initKeyControl();
mouse.initMouseControl();