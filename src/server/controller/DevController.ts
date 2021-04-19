import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

@Controller('')
class DevController {
    public static readonly DEV_MSG =
        'Server is running in dev mode; no front-end content is being served.';

    @Get('*')
    private notifyDevMode(_req: Request, res: Response): Response {
        //console.log('Starting in dev mode.');
        const message = DevController.DEV_MSG;
        return res.status(StatusCodes.OK).json({ message });
    }
}

export default DevController;
