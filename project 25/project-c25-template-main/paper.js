class Paper{
constructor(x, y,r){
    var option={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }

    this.r = r
    this.image = loadImage("paper.png")
    this.body=Bodies.circle(x, y, r, option)  
    World.add(world, this.body)  
}


display()
{
var paperpos=this.body.position;	
push();
translate(paperpos.x, paperpos.y);
strokeWeight(4);
stroke("black");
fill("white");
rectMode(RADIUS)
pop()
imageMode(CENTER)
image(this.image, 0, 0, this.width, this.height)

//draw the ellipse here to display the Paper ball
ellipse(0, 0, this.r, this.r);


}

}



