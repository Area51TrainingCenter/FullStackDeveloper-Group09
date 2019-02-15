import { Request, Response} from "express"

export class IndexController {
  home(req: Request, res: Response) {
    res
      .status(200)
      .send("Home")
  }

  quienes(req: Request, res: Response) {
    res
      .status(200)
      .type("text/html")
      .send("<h1>Quienes</h1>")
  }

  servicios(req: Request, res: Response) {
    res
      .status(200)
      .type("text/html")
      .send("<h1>Servicios</h1>")
  }
}