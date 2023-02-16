import { CreateAccountDto } from "../dto/create-account.dto";
import { ClientKafka } from "@nestjs/microservices";


const createAccount = (
	authClient: ClientKafka,
	createAccountDto: CreateAccountDto
): Record<string, any> => {
	return authClient.emit(
		'create-user',
		JSON.stringify(createAccountDto)
	);
}

export {
	createAccount,
}
