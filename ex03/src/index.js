// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    // Only change code below this line
    myNewPets.push("Bird");
    myNewPets.push("Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");

    console.log(firstPet);
    console.log(lastPet);
    
    return myNewPets;
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;
