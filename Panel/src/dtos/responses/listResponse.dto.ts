
export class ListResponse<T>{ 
    hasMore : boolean;
    totalCount : number;
    data  : T[];
}  