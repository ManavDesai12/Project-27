class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

       var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY}

        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    
    }

    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(2);
        var Anchor1X = pointA.x;
        var Anchor1Y=pointA.y;
        var Anchor2x=pointB.x+this.offsetX;
        var Anchor2Y=pointB.x+this.offsetY;


        line(Anchor1X, Anchor1X, Anchor2X, Anchor3X);
    }

}