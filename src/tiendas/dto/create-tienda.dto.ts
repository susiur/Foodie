import { IsString, IsEmail, IsPhoneNumber, IsBoolean } from 'class-validator';

export class CreateTiendaDto {
  @IsString()
  ownerNombre: string;

  @IsString()
  ownerDocumento: string;

  @IsString()
  ownerPassword: string; // Para almacenar la contraseña del dueño

  @IsString()
  establishmentNombre: string;

  @IsString()
  establishmentNit: string;

  @IsString()
  accountUsuario: string;

  @IsString()
  accountPassword: string; // Para almacenar la contraseña de la cuenta

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  telefono: string;

  @IsString()
  direccion: string;

  @IsString()
  ciudad: string;

  @IsBoolean()
  activa: boolean;

  @IsString()
  linkWssp: string;
}
