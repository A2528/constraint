class chain  {
    constructor(bodyA,bodyB) {
        var option = {
            bodyA: bird.body,
            bodyB: log6.body,
            stiffness:0.04,
            length:10,
        }
        this.chain = Constraint.create(option);
        World.add(world,chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}

