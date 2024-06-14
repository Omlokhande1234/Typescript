const heroes:String[]=["Captain","THor","hulk"]
heroes.push("spiderman")
const heroPower:number[]=[]
heroPower.push(2)

//Other way to deine the array
const otherWay:Array<number>=[]
otherWay.push(45)

//Passing the userDefined objects through the array
type Userrr={
    name:String,
    isactive:boolean
}
//Here we have created the array and define its type of the elements
// of user array as Userr where it passes the object as the elements of the array

const users:Userrr[]=[]
users.push({name:"",isactive:true})