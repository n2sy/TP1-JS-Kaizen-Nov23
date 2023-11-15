const guests= ['Madrid', 'Lisbonne', 'Paris', 'Lisbonne', 'Lisbonne',
    'Paris', 'Lisbonne'];

var stats = new Map();

guests.forEach((element) => {
    console.log(element);
    console.log(stats)
    if(!stats.has(element)) {
        stats.set(element, 1)
    } else {
        let nb = stats.get(element);
        //nb++;
        stats.set(element, ++nb); // increment Pre
        //stats.set(element, nb++); // increment Post

    }
})

console.log(stats);

for (const [key, value] of stats) {
    console.log(`${key} : ${value} visiteurs`);
}