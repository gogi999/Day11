// Create a temps array here
var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46];
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];

var temps = [[...monday], [...tuesday], [...wednesday], [...thursday], [...friday]];
// End of temps array

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line
    for (var i = 0; i < newTemps.length; i++) {
        var sum = 0;
        for (var j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
        }
        var avgValues = sum / arr[j].length;
        averageDayTemp.push(avgValues);
    }
    return averageDayTemp;

    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps)); // Change this line
module.exports = myArrayFunction;
