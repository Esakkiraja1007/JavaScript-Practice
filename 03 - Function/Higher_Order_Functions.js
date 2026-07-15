function name(params)
{
    return function()
    {
        console.log("Hello my name is " +params)
    }
}
let answer = name("esakki")

answer()