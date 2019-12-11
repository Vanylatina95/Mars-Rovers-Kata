

//instructions
console.log("Welcome to the Mars Rovers. Please use the command() function,¿ and use either l (left) , r (right) f (forward), or b (backwards)");

var rover= {


  direction:"N",
  x:0,
  y:0,
  travelLog:[]
};

var obstacles={
  x:[1,2,4,5,2],
  y:[0,1,3,4,9]
};

 //  visual grid 
//  [r, x, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, x, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, x, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, x, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, x, 0, 0, 0, 0, 0, 0, 0],






  //turning  left 

  function turnLeft (){

   switch (rover.direction){

    case "N":
      rover.direction="w";
      break;

    case "w":
      rover.direction="s";
      break;
    
     case "s":
     rover.direction="E";
     break;
     
     case "E":
     rover.direction="N";
     break;
   }
    console.log(`turnLeft was called! The current direction is  ${rover.direction}`);
  };

  
  // turning right
  function turnRight (){

    switch (rover.direction){
 
     case "N":
       rover.direction="E";
       break;
 
     case "w":
       rover.direction="s";
       break;
     
      case "s":
      rover.direction="W";
      break;
      
      case "E":
      rover.direction="N";
      break;
    }
     console.log(`turnRight was called! The current direction is  ${rover.direction}`);
   }
   
  
//moving forward
function moveForward(){
console.log("moveForward was called");
// keeping track of the rover's position and  checking if the Rover will move outside the grid
if(rover.direction==="N" && rover.y>0){
  rover.y  +=-1;
  if(testObstacles())rover.y +=1;}

else if (rover.direction==="E" && rover.x < 10) {
rover.x +=1;
if(testObstacles())rover.x +=-1;
}

else if (rover.direction==="S" && rover.y < 10) {
  rover.y +=1;
  if(testObstacles())rover.y +=-1;
  }

else if (rover.direction==="w" && rover.x > 0) {
    rover.x += -1;
    if(testObstacles())rover.x +=1;
  }
    
else {
console.log(`You must stay within the grid!. The current direction is" ${rover.x} ${rover.y}`);
rover.travelLog.push("(" + rover.x + "," + rover.y + " )");
}
}



function moveBackward (){
console.log("move backwards was called");
// keeping track of the rover's position and  checking if the Rover will move outside the grid
if(rover.direction==="N" && rover.y <10) {
  rover.y  +=1;
  if(testObstacles())rover.y +=-1;
}

else if (rover.direction==="E" && rover.x > 0) {
rover.x += -1;
if(testObstacles())rover.x +=1;
}

else if (rover.direction==="S" && rover.y > 0) {
  rover.y += -1;
  if(testObstacles())rover.y += 1;
  }

else if (rover.direction==="w" && rover.x > 0) {
    rover.x +=1;
    if(testObstacles())rover.x += -1;
    }
    

else {
  console.log(`You must stay within the grid!. The current direction is" ${rover.x} ${rover.y}`);
  rover.travelLog.push("(" + rover.x + "," + rover.y + " )");
  }
}


//loop to check any invalid input
function command(test){
  for(var i=0; i<test.length; i++){
   if(test[i] !== "l" &&  test[i]!== "r" && test[i]!== "f" && test[i]!== "b"){
    return "Invalid input. Use only l,r,f,b";
  }
 }

for(i=0; i<test.length; i++){

switch (test[i]){
case "l":
  turnLeft();
  break;
case "r":
   turnRight();
   break;
case "f":
  moveForward();
  break;
case "b":
  moveBackward();
break;
    }
 
   }console.log(rover.travelLog);
}



// checking obstacles 
function testObstacles(){
for (var j=0; j<obstacles.x.length; j++){
  if (rover.x===obstacles.x[j] && rover.y===obstacles.y[j]){
  console.log("Watch out!Obstacle");
  return true;
       }
     }  return false;  
   }
    

