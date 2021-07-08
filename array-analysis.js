function analyzeArray(arr) {
    let arrayStats = {
        average: getArrayAvg(arr),
        min: getArrayMin(arr),
        max: getArrayMax(arr),
        length: arr.length,
    }
    return arrayStats;
}

function getArrayAvg(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    let avg = sum / arr.length;
    return avg;
}

function getArrayMin(arr) {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    return min;
}

function getArrayMax(arr) {
    let max = arr[0];
    arr.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
}


let array = [1, 2, 3, 1, 4];

console.log(analyzeArray(array));



module.exports = analyzeArray;