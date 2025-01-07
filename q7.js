const car = {
    make: "Generic",
    model: "Model",
    year: 2000,
    getDetails: function () {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
};


const electricCar = Object.create(car);
electricCar.batteryCapacity = "100 kWh"; 
electricCar.getBatteryInfo = function () {
    return `Battery Capacity: ${this.batteryCapacity}`;
};

const myElectricCar = Object.create(electricCar);
myElectricCar.make = "Tesla";
myElectricCar.model = "Model S";
myElectricCar.year = 2022;
myElectricCar.batteryCapacity = "120 kWh";

console.log(myElectricCar.getDetails());     
console.log(myElectricCar.getBatteryInfo());