import type { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';

describe('Server (e2e)', () => {
    let app: INestApplication;
    let url: string;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.listen(0);
        url = await app.getUrl();
        pactum.request.setBaseUrl(url.replace('[::1]', 'localhost'));
    });

    afterAll(async () => {
        await app.close();
    });

    describe('/graphql', () => {
        describe('register', () => {
            it('should register a user', async () => {});
        });
    });
});
