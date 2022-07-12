import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

const ENTITY_PATH = join(__dirname, '../**/*.entity.ts');

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('database.host'),
                port: configService.get('database.port'),
                username: configService.get('database.username'),
                password: configService.get('database.password'),
                database: configService.get('database.name'),
                synchronize: true,
                logging: true,
                logNotifications: true,
                dropSchema: true,
                autoLoadEntities: true,
                entities: [ENTITY_PATH],
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
