let animals = ["Dog","Cat","Rabbit","Lion"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet`);
});
console.log("Any of these animals would make a great pet!")