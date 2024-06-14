interface user{
    dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    //startTrial:()=>string
    startTrial():string
    getCOupon(couponName:string):number
}
const hiteshh:user={
    dbId: 123,
    email: "",
    userId: 34,
    startTrial: () => { return "" },
    getCOupon: (name: "hitesh10") => { return 10 },
    city: "",
    name: undefined
}