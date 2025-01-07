function createProfile({ name, email }) {
    return { name, email };
}

const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
    address: '123 Main St'
};

const profile = createProfile(user);
console.log(profile); 

