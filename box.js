class Box{
    constructor(x,y,width,height){
        var boxOption=
           { isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,boxOption);
        World.add(myWorld,this.body);
      
        this.height=height;
        this.width=width;
    }

    display(){
        var angle=this.body.angle;
        push();
        fill("red");
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
      //  rect(this.body.position.x,this.body.position.y,this.width,this.height);
      rect(0,0,this.width,this.height);
       pop();
    }
}   