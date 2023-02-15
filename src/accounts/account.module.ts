import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserAuthService } from './account.service';
import { UserAuthController } from './account.controller';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'AUTH_MICROSERVICE',
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'auth',
						brokers: ['localhost:9092'],
					},
					producerOnlyMode: true,
					consumer: {
						groupId: 'auth-consumer',
					},
				},
			},
		]),
	],
	controllers: [UserAuthController],
	providers: [UserAuthService],
})
export class UserAuthModule {}
