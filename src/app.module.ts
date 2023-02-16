import { Module } from '@nestjs/common';
import { UserAuthModule } from './accounts/account.module';
import { ConfModules } from './core/configs/config.module';

@Module({
	imports: [
		UserAuthModule.register({
			createPath: '/create-account',
			basePath: 'accounts'
		}),
		ConfModules
	],
})
export class AppModule {}
