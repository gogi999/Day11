// Only change code below this line
function myMutation(arr) {
    var firstArray = arr[0].toLowerCase().split("");
    var secondArray = arr[1].toLowerCase().split("");

    var count = 0;
    for (var i =0; i < secondArray.length; i++) {
        if(firstArray.indexOf(secondArray[i]) > -1 ) {
            count++;
        }
    }

    if (count == secondArray.length) {
        return true
    }

    else {
        return false; 
    }
}
// Only change code above this line
console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"])); // Change this line
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["Mary", "Aarmy"])); // Change this line
console.log(myMutation(["Alien", "line"])); // Change this line
console.log(myMutation(["floor", "for"])); // Change this line
console.log(myMutation(["hello", "neo"])); // Change this line
console.log(myMutation(["voodoo", "no"])); // Change this line
console.log(myMutation(["ate", "date"])); // Change this line
console.log(myMutation(["Tiger", "Zebra"])); // Change this line
console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;
