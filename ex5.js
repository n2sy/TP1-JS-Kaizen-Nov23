// const guests= ['Madrid', 'Lisbonne', 'Paris', 'Lisbonne', 'Lisbonne',
//     'Paris', 'Lisbonne'];

// var stats = new Map();

// guests.forEach((element) => {
//     console.log(element);
//     console.log(stats)
//     if(!stats.has(element)) {
//         stats.set(element, 1)
//     } else {
//         let nb = stats.get(element);
//         //nb++;
//         stats.set(element, ++nb); // increment Pre
//         //stats.set(element, nb++); // increment Post

//     }
// })

// console.log(stats);

// for (const [key, value] of stats) {
//     console.log(`${key} : ${value} visiteurs`);
// }


/////////////////////////////////////////////////////////////////////

const users = [
    {id: 1, revenus:[10, 30]},
    {id: 2, revenus:[10, 40]},
    {id: 3, revenus:[40, 40]}
];

newUsers = users.map((user) => {
   const iter = user.revenus.values(); 
    let somme = 0;
   for (const val of iter) {
        somme += val;
   }
   return {id : user.id, total : somme}
})

console.log(newUsers);

// const tab = [2, 3, 5];

// newTab = tab.map((elt) => {
//     return elt * 5;
// })

// console.log(newTab);
