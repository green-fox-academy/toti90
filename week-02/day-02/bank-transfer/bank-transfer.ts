'use strict';
const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];
// Create function that returns the name and balance of cash on an account in a list
console.log(getNameAndBalance(11234543));
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]
function getNameAndBalance(num:number) {
    let searchedClient: any[] = []
    accounts.map(x=> x["accountNumber"] === num ? searchedClient.push(x["clientName"],x["balance"]):"")
    return searchedClient
}

function transferAmount(list: any[], from:number, to:number, amount:number) {
    let names: any[] = []
    let accNumbers: any[] = []
    let accBalances:any[] = []
    for (let i=0;i<list.length;i++) {
        names.push(list[i].clientName)
        accNumbers.push(list[i].accountNumber)
        accBalances.push(list[i].balance)
    }
    let indexOfFrom = accNumbers.indexOf(from)
    let indexOfTo = accNumbers.indexOf(to)
    accBalances[indexOfFrom] -= amount
    accBalances[indexOfTo] += amount
    list[indexOfFrom].balance = accBalances[indexOfFrom]
    list[indexOfTo].balance = accBalances[indexOfTo]
    return list
}

console.log(transferAmount(accounts, 43546731, 23456311, 500.0))


