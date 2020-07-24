
var car, wall, speed, weight

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createsprite (300, 200, 10, 100)
  speed = random (50, 90)
  weight = random (400,1500)
car.velocityX= speed

}



function draw() {
  background(255,255,255);  

  if car.touching (wall) {

    car.velocityX = 0;
    
    }
    
    if 0.5*weight*speed*speed/22500 < 100 () {
    
    car.shapeColor = "green" ;
    
    
    }
    
    if 100< 0.5*weight*speed*speed/22500 < 180 () {
    
      car.shapeColor = "yellow" ;
      
      
      }
    
      if 0.5*weight*speed*speed/22500 > 180 () {
    
        car.shapeColor = "red" ;
        
        
        }




  drawSprites();
}