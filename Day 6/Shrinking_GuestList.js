var guests = ['Safia', 'Yahya', 'Khowla'];
console.log("Sadly, I am only able to invite two people to dinner because my new bigger dinner table has not been delivered in time");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("Sorry ".concat(removedguest, ",I can't invite you to dinner."));
}
guests.forEach(function (twoGuests) {
    console.log("Hi ".concat(twoGuests, ", you are still invited to dinner"));
});
guests.splice(0, guests.length);
console.log(guests);
