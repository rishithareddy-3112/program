const tempConvert = {
    toFahrenheit: (temp) => {
        return (temp * 9/5) + 32;
    },

    tocelsius: (temp) => {
        return (temp - 32) * 5/9;
    }
}

console.log(tempConvert.toFahrenheit(38));
console.log(tempConvert.tocelsius(100.4));