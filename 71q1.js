function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

const result = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(result);

const result1 =  mergeArrays([8, 6], [4, 4], [5, 3]);
console.log(result1);

const result2 =  mergeArrays([1, 1], [2, 4], [3, 3]);
console.log(result2);
