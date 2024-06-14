function addTwo(num:number):number{
    //Here we have to define the type of input and also the type of output in 
    //order to get desired output type first number allows us to define the 
    //input of the function and second one outside bracket helps us to define
    //the output type of the function
    return num+2
}
addTwo(5)
function signupUser(name:String,email:String,isPaid:boolean){
    
}
signupUser('om','om56@',false)
const getHello=(s:String)=>{
    //Now this function can have any return type as any of the return type is not defined

}
const getHelloo=(s:String):String=>{
    //Now this function can have return type string as  the return type is defined as string
    return ""
}
const heros=["thor","captainAmerica","Hulk"]
heros.map((hero)=>{ 
//Here theres no need to define the type of the input but the 
//output needs to be defined
    return `hero is ${heros}`
})
export{}