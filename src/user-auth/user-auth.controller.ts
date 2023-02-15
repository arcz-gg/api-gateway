import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { CreateAccountDto } from './dto/create-user-auth.dto';

@Controller('user-auth')
export class UserAuthController {
	constructor(private readonly userAuthService: UserAuthService) {}

	@Post()
	create(@Body() createAccountDto: CreateAccountDto) {
		return this.userAuthService.create(createAccountDto);
	}
}
