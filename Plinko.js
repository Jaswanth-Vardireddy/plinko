class Plinko{

constructor(x,y,width,height){

var options={
isStatic:true,
restitution:1,
friction:0
}

this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.x=x;
this.y=y;
this.width=width;
this.height=height;
}

display()
{
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(CENTER)
ellipse(0,0,this.width,this.height)
pop();
}
}