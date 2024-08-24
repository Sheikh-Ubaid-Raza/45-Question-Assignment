var magicians = ["Yashwa", "Canon", "Prince", "John"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great !";
    }
}
make_great(magicians);
show_magicians(magicians);
