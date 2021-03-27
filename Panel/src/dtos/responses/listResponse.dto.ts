import { IsArray, IsBoolean, IsNumber, IsObject, IsString } from "class-validator";

export class ListResponse<T>{
    @IsBoolean()
    hasMore : boolean;

    @IsNumber()
    totalCount : number;
    @IsArray()
    data  : T[];
}  