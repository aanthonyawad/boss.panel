import { IsNumber, IsString } from 'class-validator';

class RangeInParamsDto {
    @IsString()
    public readonly range: string;
}

export default RangeInParamsDto;

 

