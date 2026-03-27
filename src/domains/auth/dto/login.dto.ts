import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'jean.dupont@example.com', description: "L'adresse email de l'utilisateur" })
    @IsEmail({}, { message: 'Email invalide' })
    mail: string;

    @ApiProperty({ example: 'MotDePasse123!', description: "Le mot de passe de l'utilisateur" })
    @IsString()
    @IsNotEmpty({ message: 'Le mot de passe ne peut pas être vide' })
    password: string;
}
