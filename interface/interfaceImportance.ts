
interface TakePhoto{
    cameraMode:string
    filter:String
    burst:number
}
interface story{
    createStory():void
}
class Instagram implements TakePhoto{
      constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number

      ){}
}
class Youtube implements TakePhoto,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
    createStory(): void {
        
    }
}