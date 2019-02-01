import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';

@Injectable()
export class InterceptorHttpClientRequestService implements HttpInterceptor {
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url } = request;

        return next.handle(request.clone({
            url: `${ environment.api }${ url }`,
        })).pipe(map((event: HttpEvent<any>) => event));
    }
}
