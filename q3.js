let person = {
    name: "John",
    age: 25,

    greet(){
        return 'Name: ' + this.name + ', Age: ' + this.age;
    },

    isAdult(){
        if(this.age >= 18){
            return 'you are an adult';
        }
             return 'you are not an adult';
    }
}

console.log(person.greet());
console.log(person.isAdult());