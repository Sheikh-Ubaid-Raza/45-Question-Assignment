var animals = ["Dog", "Cat", "Rabbit", "Lion"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet"));
});
console.log("Any of these animals would make a great pet!");
