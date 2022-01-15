import { AuthService } from './auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LocalStrategy } from './providers/strategies/local.strategy';
import { UserRepo } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { LocalAuthSerializer } from './providers/local.serializer';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/models/user.entity';
import { IUser } from '../user/interfaces/user.interface';
import { UserModule } from '../user/user.module';

const mockUser = () => ({
    id: '12345678',
    displayName: 'Sample User',
    username: 'sample_user123',
    email: 'sampleuser@example.com',
    password: 'ng721brxf9',
});

describe('AuthService', () => {
    let authService: AuthService;
    let userService: UserService;

    const mockUserRepo = {
        findOne: jest.fn().mockImplementation(() => mockUser()),
        findOneOrFail: jest.fn().mockImplementation(() => mockUser()),
        findByEmail: jest.fn().mockImplementation(() => mockUser()),
        create: jest.fn().mockImplementation(() => mockUser()),
        save: jest.fn().mockImplementation(() => mockUser()),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [UserModule],
            providers: [
                AuthService,
                LocalStrategy,
                LocalAuthSerializer,
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useValue: mockUserRepo,
                },
            ],
        }).compile();

        authService = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(authService).toBeDefined();
    });

    describe('findById', () => {
        it('should return a user', async () => {
            expect(await userService.findById('')).toBe(mockUser());
        });
    });

    describe('validateUser', () => {
        it('should return the validated user', async () => {
            expect(await authService.validateCredentials('', '')).toBe(
                mockUser()
            );
        });
    });
});
