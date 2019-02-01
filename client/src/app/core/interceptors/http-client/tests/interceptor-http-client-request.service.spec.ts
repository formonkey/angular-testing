import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InterceptorHttpClientRequestService } from '../requests';
import { environment } from '../../../../../environments/environment';
import { InterceptorServiceMock } from './mocks/interceptor.service.mock';

describe('Interceptor http client request service', () => {
    let providers: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                InterceptorServiceMock,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: InterceptorHttpClientRequestService,
                    multi: true,
                },
            ],
        });

        setProviders()
    });

    it ('When we make a request, we should add the host in front of the path of the api', () => {
        providers.interceptorServiceMock.getMock().subscribe((response) => expect(response).toBeTruthy());

        providers.httpTestingController.expectOne(`${ environment.api }/api/mock`);
    });

    function setProviders() {
        providers = {
            httpTestingController: TestBed.get(HttpTestingController),
            interceptorServiceMock: TestBed.get(InterceptorServiceMock),
        };
    }
});
