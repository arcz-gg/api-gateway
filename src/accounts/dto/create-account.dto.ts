import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateAccountDto {
	@ApiProperty()
	@IsString()
	@Length(1, 30)
	userId: string;

	@ApiProperty()
	@IsString()
	@Length(1, 30)
	username: string;
}

export { CreateAccountDto };
