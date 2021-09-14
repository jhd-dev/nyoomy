import 'reflect-metadata';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { HttpServer } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = app.get(Logger);
    const port = app.get(ConfigService).get<number>('port', 4000);

    app.useGlobalPipes(new ValidationPipe());

    const server = (await app.listen(port)) as HttpServer;
    logger.log(`Server listening on port ${port} at ${await app.getUrl()}.`);

    process.on('SIGTERM', () => {
        logger.log('SIGTERM signal recieved; closing HTTP server.');
        server.close();
    });
}

void bootstrap();
