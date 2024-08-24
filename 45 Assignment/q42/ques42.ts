let magicians:string[]=["Yashwa","Canon","Prince","John"];

function show_magicians(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i])
    }
}
function make_great(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        magicians[i] = magicians[i] + " the Great !"
    }
}
make_great(magicians);
show_magicians(magicians)