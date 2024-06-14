//generics helps us to make components and function reusable

const score:Array<number>=[]
const names:Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
    return val
}
//Here in any the input type can be anything also the output part no datatype is defined here

function identityTwo(val:any):any{
    return  val
}
//This can take string number boolean as an input and whatever input type we give it gets locked same for output type

//Instead of Type here inside this <> we can use any other letter
 function identityThree<Type>(val:Type):Type{
     return val
}
//As our input type is string we will get 
identityThree("om")

//Perfect example of generics
function identityFour<T>(val:T):T{
    return val
}
interface Bottle{
    brand:string,
    type:number
}
//Here we have accessed the identityFour function and passes Bottle inside it so here input 
//type is also Interface bootle and the output type is also same
identityFour<Bottle>({brand:"",type:4})

//Generics in arrays

//As here we take the input type as the product array and the output type we defined 
//the return type must also  be in form of array 
function getSearchProducts<T>(products:T[]):T{
    const myIndex=4 
    return products[myIndex]
}
const getMoreSearchProducts=<T>(products:T[]):T=>{
    const myIndex=5
    return products[myIndex] 
    // return products[3,4,5,6]
}

//Generics classes
interface Database{
    connection:String,
    username:String,
    password:String
}
function anotherFunction<T,U>(valone:T,valueTwo:U):object{
    return {valone,valueTwo}
}
anotherFunction(3,"4")

function anotherFunction2<T,U extends number>(valueOne:T,valueTwo:U):object{
    return {valueOne,valueTwo}
}
anotherFunction2(3,4)

function anotherFunction3<T,U extends Database>(valueOne:T,valueTwo:U):object{
   return{
    valueOne,
    valueTwo

   }
}
// anotherFunction3(" ","")
interface Quiz{
    name:String,
    type:string
}
interface course{
    name:String,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}