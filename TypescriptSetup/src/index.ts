console.log("typescript is here")
// class user{
//     email:String
//     name:String
//     readonly city:String="jaipur"
//     constructor(email:String,name:String){
//         this.email=email
//         this.name=name

//     }
// }
//Public and private
class User{
    //When we use protected then the variable is accessible inside the present class and the class which inherits these class
    protected _courseCount=1
    email:String
    name:String
    //Now this term defined in this class will only be accessible within this class and not outside these class
    //vice-versa if the public is used here then it will be accessible also outside this class
    private readonly city:String="jaipur"
    constructor(email:String,name:String){
        this.email=email
        this.name=name

    }
    //Getters and Setters
    //getters cant have the same name as the variables defined in the class

    get getAppleEmail():String{
        return `apple${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error ("Course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}
class SubUser extends User{
    isFamily: boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}





const hitesh=new User("fff","jjj")
hitesh.getAppleEmail