import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: 'jean.dupont@example.com', description: "L'adresse email de l'utilisateur" })
    @IsEmail({}, { message: 'Email invalide' })
    mail: string;

    @ApiProperty({ example: 'MotDePasse123!', description: 'Le mot de passe (min 6 caractères)' })
    @IsString()
    @IsNotEmpty({ message: 'Le mot de passe ne peut pas être vide' })
    @MinLength(6, { message: 'Le mot de passe doit faire au moins 6 caractères' })
    password: string;

    @ApiProperty({ example: 'Dupont', description: "Le nom de famille de l'utilisateur" })
    @IsString()
    @IsNotEmpty({ message: 'Le nom est obligatoire' })
    last_name: string;

    @ApiProperty({ example: 'Jean', description: "Le prénom de l'utilisateur" })
    @IsString()
    @IsNotEmpty({ message: 'Le prénom est obligatoire' })
    first_name: string;
}
