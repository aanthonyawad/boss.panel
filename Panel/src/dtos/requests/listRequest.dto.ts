import { IsString } from 'class-validator';
class ListRequestDto{
    @IsString()
    public readonly take : string;
    @IsString()
    public readonly skip : string;
}
export default ListRequestDto;