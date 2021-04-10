import { IsNumber, IsString } from 'class-validator';
import ListRequestDto from '../listRequest.dto';

class RangeInParamsDto extends ListRequestDto{
    @IsString()
    public readonly range: string;
}
export default RangeInParamsDto;

 

