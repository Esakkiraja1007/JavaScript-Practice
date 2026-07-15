let gobal_scope = 100;

function result()
{
    let local_scope= 50
    console.log(local_scope)
    console.log(gobal_scope)
}
console.log(gobal_scope)

result()
