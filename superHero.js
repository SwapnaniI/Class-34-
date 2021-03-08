class Hero{
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
        push()
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y)
        noStroke()
        fill("red")
        rect(0,0,this.w,this.h)
        pop()
    }

}
