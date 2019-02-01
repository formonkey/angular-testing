import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InterceptorServiceMock {
    constructor(private readonly http: HttpClient) {}

    public getMock() {
        return this.http.get('/api/mock');
    }
}
