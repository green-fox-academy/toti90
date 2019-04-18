`use strict`
import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

// function orderDominoes(domino:Domino[]): Domino[] {

// }

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let dominoes1 = []
for (let i=0;i<dominoes.length;i++) {
  dominoes1.push(dominoes[i].getValue())
}

let orderedDominoes = []
orderedDominoes.push(dominoes1[0])
while (orderedDominoes.length !== dominoes1.length) {
  for (let i=1;i<dominoes1.length;i++) {
    if (orderedDominoes[orderedDominoes.length-1][1] === dominoes1[i][0]) {
      orderedDominoes.push(dominoes1[i])
    }
  }
}



console.log(orderedDominoes);
