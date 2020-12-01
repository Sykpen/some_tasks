// 1 задание

const numbersArray = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {
    let result = [];
    if (!numbers.length)
     return result;
  
    let totalSum = numbers.reduce(function(sum, item) {
      result.push(sum);
      return sum + item;
    });
    result.push(totalSum);
    return result;
}

console.log(currentSums(numbersArray))

// 2 задание

const str = "Каждый охотник желает знать, где сидит фазан.";
let array =  str.split(' ');
let result = [];
let rainbow = array.filter(item => {
    result.push(item[0])
})
console.log(result)

// 3 задание

function changeArray(arr) {
    if(arr.length % 2 === 0) {
        let arrayFirstPeace = arr.slice(arr.length/2)
        let arraySecondPeace = arr.slice(0, arr.length/2)
        let result = [...arrayFirstPeace, ...arraySecondPeace]
        console.log(result)
        return result
    }
    let middleSymbol = arr.slice(Math.floor(arr.length /2), Math.floor(arr.length /2) + 1)[0]
    arr.splice(arr.indexOf(middleSymbol), 1)
    let arrayFirstPeace = arr.slice(arr.length/2)
    let arraySecondPeace = arr.slice(0, arr.length/2)
    let result = [...arrayFirstPeace, middleSymbol, ...arraySecondPeace]
    console.log(result)
    return result
}

changeArray([1,2])



