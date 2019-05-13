`use strict`

export function potter(books:number[]) {
  let discounts = [0,0.05,0.1,0.2,0.25]
  let finalPrice = 0
  let priceOneBook = 8
  let maxOf = Math.max(...books)
  while (maxOf !== 0) {
    books = books.sort((a,b) => b-a)
    let filteredBooks = books.filter(x => x===maxOf)
    finalPrice += (1-discounts[(filteredBooks.length-1)])*(priceOneBook*filteredBooks.length)
    for (let i = 0; i<filteredBooks.length;i++) {
      books[i] = books[i]-1
    }
    maxOf = Math.max(...books)
  }
  return finalPrice 
}