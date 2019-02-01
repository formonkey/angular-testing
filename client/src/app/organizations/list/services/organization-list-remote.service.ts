import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrganizationListRemoteService {
    constructor(private readonly http: HttpClient) {}

    public async getAllData() {
        return await this.http.get('/api/organizations').toPromise();
    }
}
