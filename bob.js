class Bob{
    constructor(x,y,radius){
        var options = {
            restitution: 1,
            density: 0.8,
            friction: 0
        }
        this.r = radius
        this.body = Bodies.circle(x,y,radius/2,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}