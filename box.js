class Box{
    constructor(x,y,w,h){
        var options = {
            restitution:0.6,
            isStatic: false,
            density: 0.4,
            friction:0.6
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
        strokeWeight(0.8)
        stroke(51, 153, 255)
        fill(37, 244, 106)
        rect(0,0,this.w,this.h)
        pop()
    }

}