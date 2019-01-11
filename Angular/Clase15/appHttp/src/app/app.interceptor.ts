import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const data = JSON.parse(sessionStorage.getItem("usuario"))

    const clon = data ? req.clone({
      headers: req.headers.append("authorization", "bearer " + data.accessToken)
    }) : req.clone()

    return next.handle(clon)
  }
}
