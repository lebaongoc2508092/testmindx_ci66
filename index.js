const array = [2, 3, -5, -2, 4]

function adjacentElementsProduct(arr) {
    let max = arr[0] * arr[1];
    for(let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i]*arr[i + 1];
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

console.log(adjacentElementsProduct(array));




// bài 2 
const arr = [60, 40, 55, 75, 64]

function alternatingSums(a) {
  var sum1 = 0;
  var sum2 = 0;
  for(let i = 0; i < a.length; i+= 2) {
    sum1 += a[i];
  }
  for(let j = 1;j < a.length; j+= 2) {
    sum2 += a[j];
    
  }
  return [sum1, sum2]
}

console.log(alternatingSums(arr))
