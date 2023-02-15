import {
	Controller,
	Post,
	Body,
} from '@nestjs/common';
import { UserAuthService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

@Controller('user-auth')
export class UserAuthController {
	constructor(private readonly userAuthService: UserAuthService) {}

	@Post()
	create(@Body() createAccountDto: CreateAccountDto) {
		return this.userAuthService.create(createAccountDto);
	}
}
