let student_name = "Esakki"

let roll_number = 13

let no_of_number = 5

let mark = [99,78,67,88,86]

console.log("Application Starting.......")
console.log("Students detail ADDD Successfully")

console.log("Display Student Detail")
function displaystudentdetail(name,roll)
{
    console.log("Students name: "+name)
    console.log("Roll Number: "+roll)

}
console.log("Students Mark")

function studentmark(mark)
{
    let i=0
    for(num of mark)
    {
        console.log(`Mark ${i+1}: ${num}`)
        i++
    }
}
const total_mark = function total(mark)
{
    let total=0
    for(num of mark)
    {
        total+=num
    }
    return total
}
const average = (total_mark,mark)=> 
{
    let avg=total_mark/mark.length
    console.log("Average Mark: ",avg)
}




displaystudentdetail(student_name,roll_number)
studentmark(mark)
console.log("Total Mark: ",total_mark(mark))
average(total_mark(mark),mark)


