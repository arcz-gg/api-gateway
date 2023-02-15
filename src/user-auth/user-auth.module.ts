import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserAuthService } from './user-auth.service';
import { UserAuthController } from './user-auth.controller';

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
