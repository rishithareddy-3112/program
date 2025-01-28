function* combineSequences(array) {
    let a = 0, b = 1;
    let i = 0;
    while (true) {
      if (i < array.length) {
        yield array[i++];
      } else {
        yield a;
        [a, b] = [b, a + b]; 
      }
    }
  }
  const numbers = [10, 20, 30]; 
  const combinedGen = combineSequences(numbers);
  
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value);
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value);
  console.log(combinedGen.next().value); 
  console.log(combinedGen.next().value); 
  