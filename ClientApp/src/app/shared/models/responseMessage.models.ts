export interface ResponseMessage<T>{
    statusCode : number;
    validationErrors : string [];
    isHandled : boolean;
    response : T
}