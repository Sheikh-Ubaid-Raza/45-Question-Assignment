// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should
// print a summary of the sandwich that is being ordered. Call the function three times, using a different
// number of arguments each time.

function make_sandwich(...items:string[]){
    console.log(`You ordered a sandwich with these items: ${items.join(' , ')}`); 
}
make_sandwich("Veggie","cucumber","sprouts","sauce");
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");