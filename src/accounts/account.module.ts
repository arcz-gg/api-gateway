import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getControllerClass } from './account.controller';
import { AccountService } from './account.service';

@Module({})
export class UserAuthModule {
	static register(config: { createPath: string, basePath: string }): DynamicModule {

		const { createPath, basePath } = config;
		const AccountController = getControllerClass({ basePath, createPath });
		return {
			module: UserAuthModule,
			providers: [AccountService],
			controllers: [AccountController],
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
								groupId: 'auth-consumer'
							}
						}
					}
				])
			]
		}
	}
}
