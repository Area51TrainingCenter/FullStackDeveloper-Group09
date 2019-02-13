import { Request, Response, NextFunction } from "express"

const authorization = (...roles) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(roles.indexOf(res.locals.rol)>=0) {
            next()
        } else {
            res
                .status(409)
                .json({
                    status: 409,
                    message: "It's forbidden"
                })
        }
    }
}

export {authorization}