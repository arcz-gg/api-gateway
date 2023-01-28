import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ConfModules } from './core/configs/config.module';

@Module({
  imports: [
    UserAuthModule,
    ConfModules
  ],
})
export class AppModule {}
