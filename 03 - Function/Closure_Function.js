let name ="Esaki"

function outer()
{
    let age = 18

    return function()
    {
        let city ="Tirunelveli"
        console.log("Name:"+name)
        console.log("Age:"+age)
        console.log("City:"+city)
    }
}

let answer = outer()
answer()

console.log("Another Practice Problem in Closure")

function count()
{
    let count =0;
    return function()
    {
        count++
        console.log(count)
    }
}
let result = count()
result()
result()
result()
result()