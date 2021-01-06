class Drop{
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.1,
            density:1,
            restitution:0.05
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode (RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
}