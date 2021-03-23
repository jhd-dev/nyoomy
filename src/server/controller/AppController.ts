import StatusCodes from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";
import { Logger } from "@overnightjs/logger";
import { Request, Response } from "express";

@Controller("api")
class AppController {

    public static readonly SUCCESS_MSG = "Hello!";

    @Get("hello-world:name")
    private sayHello(req: Request, res: Response): Response {
        try {
            const { name } = req.params;
            if (name === "make_it_fail") {
                throw Error("User triggered failure.");
            }
            Logger.Info(AppController.SUCCESS_MSG + name);
            return res.status(StatusCodes.OK).json({
                message: AppController.SUCCESS_MSG + name,
            });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

}

export default AppController;
