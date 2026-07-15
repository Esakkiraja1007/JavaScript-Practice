//Grade Calculator
console.log("Grade Calculator")
let mark = 35
if(mark>=90 && mark <=100)
{
    console.log("Grade A")
}
else if(mark>=80 && mark <90)
{
    console.log("Grade B")
}
else if(mark>=70 && mark <80)
{
    console.log("Grade C")
}
else if(mark>=60 && mark <70)
{
    console.log("Grade D")
}
else if(mark>=40 && mark <60)
{
    console.log("Grade E")
}
else
{
    console.log("Fail")
}

//Largest of Three Numbers
console.log("Largest of Three Numbers")
let num1 = 10
let num2 = 30
let num3 = 40

if(num1>num2 && num1 > num3)
{
    console.log(`Number is largest number of three number ${num1}`)
}
else if(num2>num1 && num2 > num3)
{
    console.log(`Number is largest number of three number ${num2}`)
}
else
{
    console.log(`Number is largest number of three number ${num3}`)
}