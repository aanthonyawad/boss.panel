export interface ListRequest<T>{
    take : number;
    skip : number;
    request : T
}