var drawHP = function(obj){
	brush.drawRoundRect({
        w: 60,
        h: 8,
		x: obj.x + 5,
		y: obj.y - 8,
        radius: 5,
		fillColor: "red",
        strokeColor: "darkred",
        strokeWidth: 2
	});
}