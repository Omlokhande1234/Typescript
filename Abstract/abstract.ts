abstract  class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void
}
//Object of abstract class cant be created
// const om=new TakePhoto("test","test")
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){ super(cameraMode,filter)}
    getSepia(): void {
        
    }
}
const om=new Instagram("test","test",8)