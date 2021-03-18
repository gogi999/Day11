// Only change code below this line
function multiplyArrayFunction(myArr) {
    var product = 1;
    var sum = 0;
    for (var i = 0; i < myArr.length; i++) {
        for (var j = 0; j < myArr[i].length; j++) {
            product *= myArr[i][j];
            sum += myArr[i][j];
        }
    }
    return [product, sum];
}
// Only change code above this line
console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]])); // Change this line
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]])); // Change this line
module.exports = multiplyArrayFunction;
