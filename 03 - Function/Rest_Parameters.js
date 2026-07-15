function sum(...numbers)
{
    let sum =0
    for(let num of numbers)
        {
            sum=sum+num
        }   
    console.log("The sum of all the numbers is :"+sum)
}
sum(1,2,3,4,5,6,7,7)