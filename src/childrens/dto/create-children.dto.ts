import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateChildrenDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    address: string
    @IsBoolean()
    @IsNotEmpty()
    wasGood: boolean
    @IsString()
    @IsOptional()
    wantedToy?: string
}
