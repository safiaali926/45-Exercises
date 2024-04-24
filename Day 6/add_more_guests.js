var guestlist = ['Safia', 'Yahya', 'Khowla'];
console.log("Surprise! I found a bigger dinner table.");
//Adding guest in beginning of the array
guestlist.unshift("Ali");
//Adding guest in middle of the array
guestlist.splice(guestlist.length / 2, 0, "Muhammad");
//Adding gust in the end of the array
guestlist.push("Tayyaba");
guestlist.forEach(function (newGuest) {
    console.log("Hi ".concat(newGuest, ", Would like to join me for dinner?"));
});
