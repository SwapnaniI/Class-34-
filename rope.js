class Rope{
    constructor(p,body){
        var options = {
            bodyA: body,
            pointB: p,
            stiffness: 0.2,
            length : 150
        }
        this.rope = Constraint.create(options)
        
        this.pointB = p;

        
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        push();
        strokeWeight(8)
        stroke(255)
        //line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}