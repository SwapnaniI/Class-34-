class Ground{
    constructor(x,y,w,h){
        var options = {
            restitution:0.6,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push()
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        noStroke()
        fill("brown")
        rect(0,0,this.w,this.h)
        pop()
    }

}