let places: string[] = ["Turkey", "Iceland", "Japan", "Switzerland", "Pakistan"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);

// const products:string[] = ["mobile", "ball", "laptop"];
// console.log(products);
// console.log([...products]);