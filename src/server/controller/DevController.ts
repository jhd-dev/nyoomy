//import { OK, BAD_REQUEST } from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";

import { Request, Response } from "express";
import { OK, BAD_REQUEST } from "http-status-codes"; //TODO: Replace deprecated properties

@Controller("")
class DevController {

    public static readonly DEV_MSG = "Server is running in dev mode; no front-end content is being served.";

    @Get("*")
    private notifyDevMode(_req: Request, res: Response): Response {
        console.log("Starting in dev mode.");
        const message = DevController.DEV_MSG;
        return res.status(OK)
            .json({ message });
    }
}

export default DevController;
