class InfiniteCounter {
    constructor(limit = Infinity) {
      this.current = 1; 
      this.limit = limit; 
      this.steps = 0; 
    }
  
    [Symbol.iterator]() {
      return this; 
    }
  
    next() {
      if (this.steps >= this.limit) {
        return { done: true }; 
      }
      
      this.steps++; 
      return { value: this.current++, done: false }; 
    }
  }
  const counter = new InfiniteCounter(10); 
  
  for (let number of counter) {
    console.log(number); 
  }
  