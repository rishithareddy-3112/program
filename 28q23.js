function* cumulativeSum(arr) {
    let sum = 0; 
    for (let num of arr) {
      sum += num; 
      yield sum; 
    }
    return sum; 
  }
  const numbers = [1, 2, 3, 4, 5];
  const sumGen = cumulativeSum(numbers);
  
  let result = sumGen.next();
  while (!result.done) {
    console.log(result.value); 
    result = sumGen.next(); 
  }
console.log("Final sum:", result.value);