class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        var anchor1x = pointA.x
        var anchor1y = pointA.y
        var anchor2x = pointA.x+this.offset.X
        var anchor2y = pointA.y+this.offset.Y
        line(anchor1x,anchor1y,anchor2x,anchor2y)
    }
}