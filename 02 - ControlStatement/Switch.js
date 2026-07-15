//Day Name
console.log("Day Name")
let day_name = "Tuesday"

switch(day_name)
{
    case "Monday":
    console.log("Today day is Monday")
    break;

    case "Tuesday":
    console.log("Today day is Tuesday")
    break;

    case "Wednesday":
    console.log("Today day is Wednesday")
    break;

    case "Thursday":
    console.log("Today day is Thursday")
    break;

    case "Friday":
    console.log("Today day is Friday")
    break;

    case"Saturday":
    console.log("Today day is Saturday")
    break;

    case"Sunday":
    console.log("Today day is Sunday")
    break;

    default:
    console.log("Invalid day")
}

//Calculator
console.log("Calculator")
let operator = "*"
let a = 10
let b = 20

switch(operator)
{
    case "+":
    console.log("Addition is ", a + b)
    break;

    case "-":
    console.log("Subtraction is ", a - b)
    break;

    case "*":
    console.log("Multiplication is ", a * b)
    break;

    case "/":
    console.log("Division is ", a / b)
    break;

    default:
    console.log("Invalid operator")
}