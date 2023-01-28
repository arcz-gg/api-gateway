import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { configDocument } from './core/configs/swagger.config';

async function bootstrap() {
    
    const app = await NestFactory.create(AppModule, { cors: true });
    app.enableCors();
    app.setGlobalPrefix('api-gateway/v1');
    
    const config = app.get<ConfigService>(ConfigService);
    const document = SwaggerModule.createDocument(
        app,
        configDocument,
    );

    SwaggerModule.setup('api-gateway/v1/docs', app, document);
    await app.listen(config.getOrThrow<number>('APP_PORT'));
}
bootstrap();
