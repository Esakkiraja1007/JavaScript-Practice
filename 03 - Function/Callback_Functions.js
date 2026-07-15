function add(a,b)
{
    console.log(a+b)
}

function sub(a,b)
{
    console.log(a-b)
}

function result(callback,a,b)
{
    callback(a,b)
}

result(sub,50,20)
result(add,10,5)