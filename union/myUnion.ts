//In union we can use multiple data types 

let score:number|String=33
score=44
score="44"
type Userrrr={
    name:String,
    id:number
}
type Admin={
    username:String,
    id:number
}
let hitesh:Userrrr|Admin={name:"Hitesh",id:334}
hitesh={username:"om",id:335}

function getAAbId(id:number|string){
    //id.tolowercase here this will give us the error as we dont know the datatype as input can be both either number or string
    //To access this method just use the if condition
    if(typeof id==='string'){
        id.toLowerCase()
    }

    console.log(`DB id is:${id}`)
}
getAAbId(3)
getAAbId('3')

const data:number[]=[1,2 ,3]
const data2:string[]=["ww"]
const data3: string[]|number[]=["1"]
const data4:(string|number|boolean)[]=["1",2,true]