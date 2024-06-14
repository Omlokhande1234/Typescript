function detectType(val:number|string){
    if(typeof val==="string"){
        return val.toLowerCase()
    }
    return val+3
}
function provideId(id:string|null){
    if(!id){
        return console.log("Please provide id")
    }
    id.toLowerCase()
}
//typeOf helps us to check default type
function printAll(strs:string|string[]|null){
    if(strs){
        if(strs){
            if(typeof strs==="object"){
                for(const s of strs){
                    console.log(s)
                }
            }else if(typeof strs==="string"){
                console.log(strs)
            }
        }
    }
}

//The in operator in narrowing 
interface User{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdminAccount(account:User|Admin){
    //Here we return account.admin if the interface isAdmin is present

    if("isAdmin" in account){
        return account.isAdmin
    }
}

//Instance of narrowing
//instanceof helps us to check whether the object was the instance of some class 
function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString)
    }
    else{
        console.log(x.toUpperCase)
    }
}

//Type predicates
type Fish={swim:()=>void}
type Bird={fly:()=>void}

//Here by isFish function typescript gets to know whether the pet is Fish

function isFish(pet:Fish|Bird){
    return (pet as Fish).swim!==undefined
}
//Still here when we use pet the typescript is confused whether the pet is Bird or the fish
//So we use type predicates to narrow down the type of pet
function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet 
        return "bird food"
    }

}
//The confusion is cleared of pet in below code 
//Now the typescript knows what the pet is
function isFishy(pet:Fish|Bird):pet is Fish{
    return (pet as Fish).swim!==undefined
}
function getFoodd(pet:Fish|Bird){
    if(isFishy(pet)){
        pet
        return "fish food"
    }
    else{
        pet 
        return "bird food"
    }

}

//DISCRIMINATED UNION
