class LeafBlower{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(175,150,10,10, options);
        World.add(world, this.body)
        this.image = loadImage("leafblower.png")
        Matter.Body.scale(this.body, 10,10)
        this.scaleX = 150
        this.scaleY = 150
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER);
        image(this.image, 0,0, this.scaleX, this.scaleY)
        pop();
    }
}