class ResettableIterable {
    constructor(numbers) {
      this.numbers = numbers; 
      this.index = 0; 
    }
  
    [Symbol.iterator]() {
      this.index = 0; 
      return this;
    }
  
    next() {
      if (this.index >= this.numbers.length) {
        return { done: true };
      }
      return { value: this.numbers[this.index++], done: false };
    }
    reset() {
      this.index = 0; 
    }
  }
  const iterable = new ResettableIterable([1, 2, 3, 4, 5]);
  console.log("First iteration:");
  for (let number of iterable) {
    console.log(number); 
  }
  console.log("Resetting...");
  iterable.reset();
  console.log("Second iteration:");
  for (let number of iterable) {
    console.log(number); 
  }
  