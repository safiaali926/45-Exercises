/*let Names:string[] = ["Tasmia", "Hafsa", "Aisha"];
for (let name of Names) {
console.log(`Hello ${name}, would you like to attend online class today?`)
}*/
var Names = ["Tasmia", "Hafsa", "Aisha"];
for (var i = 0; i < Names.length; i++) {
    console.log("Hello ".concat(Names[i], ", would you like to attend online class today?"));
}
