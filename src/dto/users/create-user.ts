import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, ValidateNested } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    //validated nested
    // @ValidateNested()
    // @Type(()=> CreateAddressDto)
    // address: CreateAddressDto;
}

// export class CreateAddressDto {
//     @IsNotEmpty()
//     line1: string;

//     line2: string;

//     @IsNotEmpty()
//     state: string;
// }