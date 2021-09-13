import 'reflect-metadata';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './env';
import type { HttpServer } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = app.get(Logger);
    app.useGlobalPipes(new ValidationPipe());

    const server = (await app.listen(PORT)) as HttpServer;
    logger.log(`Server listening on port ${PORT} at ${await app.getUrl()}.`);

    process.on('SIGTERM', () => {
        logger.log('SIGTERM signal recieved; closing HTTP server.');
        server.close();
    });
}

void bootstrap();
