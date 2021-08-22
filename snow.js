class snow{
    constructor(x,y){
        var option={
            isStatic:false

        }
        this.body=Bodies.rectangle(x,y,60,60,option);
        this.image=loadImage("snow4.png");
        this.width=60;
        this.height=60;
        this.visibility=255;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body,position;
        var angle=this.body.angle;
        push ();
translate (pos.x,pos.y);
rotate (angle);
this.visibility=this.visibility-1.5;
tint (255,this.visibility);
image (this.image,0,0,this.width,this.height);
        pop ();
    }
}