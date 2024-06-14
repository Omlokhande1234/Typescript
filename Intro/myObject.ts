const User={
    name:'Hitesh',
    email:'lll@gmail.com',
    isActive:true
}

//Passing an object through the function
function createUser({name:String,isActive:boolean}){}
createUser({name:"Om",isActive:true})
createUser(User)

//Passing and returning an object through the function
function createCourse():{name:String,isPaid:boolean}{
    return {name:"react",isPaid:true}
}
