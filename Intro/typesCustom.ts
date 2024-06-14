//Its kind of defining the data type that can be used as the type while passing into the function or getting the output

type User={
    name:String,
    isActive:boolean
}
//Here we have pass the user as the type User in the function
function createUserr(user:User){}
createUserr({name:"",isActive:true})

//"readOnly" restricts the user from ammending the content from the key where we have used the readOnl

type user={
    readonly _id:String,
    name:String,
    isActive:boolean
}
let myUser:user={
    _id:"1234",
    name:"Om",
    isActive:true
}
myUser.name="hitesh"
//can't access and update as we have used "readOnly"
// myUser._id="6666"