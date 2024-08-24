let magicians: string[] = ["Canon","Yashwa","Prince","John"];

function make_great(magicians: string[]): string[] {
  let greatMagicians:string[] = [];
  for(let i=0;i<magicians.length;i++) {
    greatMagicians.push(`${magicians[i]} the Great`);
};
return greatMagicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names