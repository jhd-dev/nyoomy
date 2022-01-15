import { UnauthorizedException } from '@nestjs/common';

const MESSAGE = 'Incorrect username or password';

export class InvalidCredentialsException extends UnauthorizedException {
    public constructor() {
        super(MESSAGE);
    }
}
