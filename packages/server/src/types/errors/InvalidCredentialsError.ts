import { CustomError } from 'ts-custom-error';

const ERROR_MSG = 'Your username or password was incorrect.';

export class InvalidCredentialsError extends CustomError {
    public constructor() {
        super(ERROR_MSG);
    }
}
