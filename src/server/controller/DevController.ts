//import { OK, BAD_REQUEST } from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { Request, Response } from "express";

@Controller("/")
class DevController {

    private readonly DEV_MSG = "Server is running in dev mode; no front-end content is being served.";

    @Get("*")
    notifyDevMode(_req: Request, res: Response) {
        Logger.Imp("Starting in dev mode.");
        const msg = this.DEV_MSG;
        res.send(msg);
    }
}

export default DevController;