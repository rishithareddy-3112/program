function calculateTotal(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
const result = calculateTotal(10, 20, 30, 40);
console.log(result); 

const result1 = calculateTotal(10, 20, 30, 40, 50, 60);
console.log(result1);

const result2 = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);
console.log(result2);