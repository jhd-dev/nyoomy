import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
    public info(message?: unknown): void {
        this.log(message);
    }

    public logContext(): void {
        this.log(this.context);
    }

    public withContext(context: string): LoggerService {
        this.setContext(context);
        return this;
    }
}
