import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
class UserAuthService {
	constructor(
		@Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka,
	) {}

	create(createAccountDto: CreateAccountDto): any {
		return this.authClient.emit(
			'create_user',
			JSON.stringify(createAccountDto),
		);
	}
}

export { UserAuthService };
