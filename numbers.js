const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3]
let largestNumber = arrayOfNums[0]

function findlargestNumber() {
    for (let i=0; i < arrayOfNums.length; i++) {
        if(arrayOfNums[i] > largestNumber) {
            largestNumber = arrayOfNums[i];
        }
    }
    return largestNumber;
}

//console.log(findlargestNumber());

function findEvenNums() {
    let evenArray = [];
    for (let i=0; i < arrayOfNums.length; i++) {
        //if (arrayOfNums[i] % 2 === 0) {
        //to return even numbers^^
        //if (arrayOfNums[i] %2 === 1) {
        //to return odd numbers^^ ORRRR 
        if (arrayOfNums[i] % 2 !== 0) {
            evenArray.push(arrayOfNums[i]);
        }
    }
    return evenArray;
} console.log(findEvenNums());