'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function queueAlcohol(list:any[]) {
    for (let i=0; i<list.length;i++) {
        for (let j = 1; j<list.length; j++) {
            if (list[j].alcohol < list[j-1].alcohol) {
                let element = list[j]
                list[j] = list[j-1]
                list[j-1] = element
            } else if (list[j].alcohol === list[j-1].alcohol && list[j].guns < list[j-1].guns) {
                let element = list[j]
                list[j] = list[j-1]
                list[j-1] = element
            }
        }
    } return list;
}

// function queueGun(list:any[]) {
//     for (let i=0; i<list.length;i++) {
//         for (let j = 1; j<list.length; j++) {
//             if (list[j].guns < list[j-1].guns) {
//                 let element = list[j]
//                 list[j] = list[j-1]
//                 list[j-1] = element
//             }
//         }
//     } return list;
// }

function securityCheck(list:any[]) {
    let entries: any[] = [];
    list.filter(x => (x.alcohol === 0 && x.guns === 0) ? entries.push(x.name):"");
    list.filter(x => (x.alcohol !== 0) ? securityAlcoholLoot += x.alcohol:"");
    list.filter(x => (x.guns !== 0) ? watchlist.push(x.name):"");
    return `${entries} can go inside\n${watchlist} bring a gun to festival\n${securityAlcoholLoot} l alcohol were collected`
}

console.log(queueAlcohol(queue));
console.log(securityCheck(queue));