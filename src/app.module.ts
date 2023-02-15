import { Module } from '@nestjs/common';
import { UserAuthModule } from './accounts/account.module';
import { ConfModules } from './core/configs/config.module';

@Module({
	imports: [UserAuthModule, ConfModules],
})
export class AppModule {}
