"use strict";
var drawName = function () {
	brush.drawText({
		x: this.x + 13,
		y: this.y - 13,
		text: this.name,
		color: "black",
		size: 14
	});
};

var img = pjs.tiles.newImage("assets/p2.png");
var anim = img.getAnimation(0,0,70,94,11);
var img = pjs.tiles.newImage("assets/p2f.png");
var animS = img.getAnimation(0,0,70,94,1);//72 97

var obj = game.newAnimationObject({
	x: 150,
	y: 150,
	animation: anim,
	w: 72,
	h: 97
});

obj.name = "Player1";
obj.drawName = drawName;
obj.setDelay(5);

obj.health = 1;
obj.speed = 7;
obj.addSpec = null;
obj.wNum = 0;

obj.control = function(){
    
		this.dx = this.dy = 0;
        if(key.isDown("A"))
        {
            this.dx = -obj.speed;
			this.setFlip(1,0);
        }
        else if(key.isDown("D"))
        {
            this.dx = obj.speed;
			this.setFlip(0,0);
        }  
        if(key.isDown("W"))
        {
            this.dy = -obj.speed;
        }  
        else if(key.isDown("S"))
        {
            this.dy  = obj.speed;
        }
    
        if(key.isPress("P")){
            obj.weapon = weapons[(++obj.wNum)%numOfWeapon]; 
        }
    
		
		if(!(key.isDown("A") || key.isDown("D") || key.isDown("W") || key.isDown("S")))
		{
			this.drawToFrame(8);		
		}
		else
		{
			this.setAnimation(anim);	
		}

        if(mouse.getPosition().x - this.getPositionC().x >= 0)
        {
			this.setFlip(0,0);
            this.weapon.setFlip(0,0);
        }
		else
		{
			this.setFlip(1,0);
            this.weapon.setFlip(0,1); 
		}
}

obj.collision = function(){
    OOP.forArr(blocks, function(el){
        if(obj.isIntersect(el) && el.isWall) 
        {
            if(obj.dx > 0 && oPos.x+10 < el.x)
            {
                obj.dx = 0;
            }
            else if(obj.dx < 0 && oPos.x-10 > el.x)
            {
                obj.dx = 0;
            }
            else if(obj.dy > 0 && oPos.y+10 < el.y)
            {
                obj.dy = 0;
            } 
            else if(obj.dy < 0 && oPos.y-10 > el.y)
            {
                obj.dy = 0;
            }
        } 
    });
};

obj.checkHP = function(){
    if(obj.health > 10) obj.health = 10;
}

obj.do = function(){   
    obj.control();
    obj.drawName();
    obj.checkSpec();
    
    if(obj.teleportSet){
        telep.draw();
    }
    
    obj.collision();
    obj.move(point(obj.dx,obj.dy));
    obj.moveWeapon();
    obj.checkHP();
    if(obj.addSpec){
        obj.addSpec.draw();
    }  
    obj.draw();  
    obj.weapon.draw();
    
}