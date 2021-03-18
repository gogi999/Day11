// Create a monitorListArray array here
var monitorListArray = ["Apple", "Peach", "Berry"];
// End of monitorListArray array

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorList = [];
    // Only change code below this line
    for (var i = 0; i < newMonitorsList.length; i++) {
        monitorList.push([monitorListArray[i], i + 1]);
    }
    return monitorList;
    // Only change code above this line
}

console.log(myMonitorsFunction(monitorListArray)); // Change this line
module.exports = myMonitorsFunction;
