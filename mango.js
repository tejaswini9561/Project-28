class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.radius = r;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        this.image  = loadImage("mango.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.radius*2, this.radius*2);
    }
}