import IdInParamsDto from '../id-in-params.dto';
import { ListResponse } from './../listResponse.dto';
import { IsString } from 'class-validator';

export class PartnersResponse extends IdInParamsDto{
    
    @IsString()
    public readonly partnerName : String;
    
    @IsString()
    public readonly orgnaization : String;

    @IsString()
    public readonly Website : String;

}

export class ListPartnersResponse extends ListResponse<PartnersResponse>{

}