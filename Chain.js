class Chain{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            PointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.PointB= PointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.PointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}