function setup() {
  createCanvas(400,400);
}

function draw() {
  background("pink");

  rectMode(CENTER)

  fill("Purple");
  rect(65,124,20,150);

  fill("indigo");
  rect(100,147,50,100);

  fill("blue");
  rect(150,157,50,75);

  fill("green");
  rect(200,168,50,50);

  fill("yellow");
  rect(250,157,50,75);

  fill("orange")
  rect(300,150,50,100);

  fill("red");
  rect(335,124,20,150);

  fill(0);
  triangle(97,64,74,97,121,97);
  
  fill(0);
  triangle(298,64,276,100,324,100);
  
  fill(0);
  triangle(200,118,174,143,224,143);
  
  fill("purple");
  triangle(64,32,57,49,73,49);
  
  fill("red");
  triangle(333,32,325,49,344,49);
   
}