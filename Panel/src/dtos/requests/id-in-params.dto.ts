import { IsString } from 'class-validator';

class IdInParamsDto {
    @IsString()
    public readonly id: string;
}
export default IdInParamsDto;