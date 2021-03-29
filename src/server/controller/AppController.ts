import StatusCodes from "http-status-codes";
import { Controller, Get } from "@overnightjs/core";

import { Request, Response } from "express";

@Controller("api/hello-world")
class AppController {

    public static readonly SUCCESS_MSG = "Hello!";

    @Get(":name")
    private sayHello(req: Request, res: Response): Response {
        try {
            const { name } = req.params;
            if (name === "make_it_fail") {
                throw Error("User triggered failure.");
            }
            console.info(AppController.SUCCESS_MSG + name);
            return res.status(StatusCodes.OK).json({
                message: AppController.SUCCESS_MSG + name,
            });
        } catch (err) {
            console.error(err, true);
            return res.status(StatusCodes.BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

}

export default AppController;
