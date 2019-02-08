import { Request, Response, NextFunction } from "express"
import { IError } from "../interfaces/error.interface";

const handlerErrors = {
  notFound: (req: Request, res: Response, next: NextFunction) => {
    let error: IError = new Error("API no encontrada")
    error.status = 404

    next(error)

    //res.sendFile(__dirname + "/public/index.html")
    /*  res
       .status(400)
       .json({
         status: 404,
         message: "Path not found"
       }) */
    /* .type("text/html")
    .send("<h1>Ruta no encontrada</h1>") */
  },
  cacheo: (ftn: (req: Request, res: Response, next: NextFunction)=>Promise<any>) => {
    return (rq: Request, rs: Response, nx: NextFunction) => {
      return ftn(rq, rs, nx).catch((error: IError) => {
        error.status = 500
        nx(error)
      })
    }
  },
  general: (error: IError, req: Request, res: Response, next: NextFunction) => {
    res
      .status(error.status)
      .json({
        status: error.status,
        message: error.message,
        stack: error.stack
      })
  }
}

export { handlerErrors }