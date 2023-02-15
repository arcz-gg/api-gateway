import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

const configDocument = new DocumentBuilder()
	.setTitle('Arczz Api Gateway')
	.setDescription('this is the main gateway to work with all service')
	.addBearerAuth()
	.build();

export { configDocument };
