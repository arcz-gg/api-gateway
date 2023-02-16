import {
	Controller,
	Post,
	Body,
    Type,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';

const getControllerClass = ({ createPath, basePath }): Type<unknown> => {


	@Controller([basePath])
	class UserAuthController {
		constructor(private readonly userAuthService: AccountService) {}

		@Post([createPath])
		create(@Body() createAccountDto: CreateAccountDto) {
			return this.userAuthService.create(createAccountDto);
		}
	}

	return UserAuthController;
}

export {
		getControllerClass
}
