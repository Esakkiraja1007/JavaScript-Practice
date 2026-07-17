let prices = [100, 250, 150, 500];

let total = prices.reduce((sum,num)=>sum+num)

console.log(total)


let numbers = [5, 10, 15, 20];

let average = numbers.reduce((sum, num)=>
{
    return sum +=num

     
})

console.log(average/numbers.length)