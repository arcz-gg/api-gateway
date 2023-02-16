import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

import { CreateAccountDto } from './dto/create-account.dto';
import { createAccount } from './utils/account.utils';

@Injectable()
class AccountService {
	constructor(
		@Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
	) {}

	create(createAccountDto: CreateAccountDto): Record<string, any> {
		return createAccount(this.authClient, createAccountDto)
	}
}

export { 
	AccountService
};
