import { Data } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { mocks } from '../../../../test';
import { OrganizationListRemoteService } from '../services';

describe('Organization list remote service', () => {
    let providers: any;
    let remoteService: OrganizationListRemoteService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                OrganizationListRemoteService,
            ],
        });

        remoteService = TestBed.get(OrganizationListRemoteService);

        setProviders();
    });

    it ('when the module has been initialized there should be an instance of our class in the remote service variable and the correct properties in the constructor', () => {
        expect(remoteService).toBeDefined();
        expect((remoteService as any).http).toEqual(providers.httpClient);
    });

    it ('when we call the function of recovering the data of organizations it should be done to the correct url and with the GET method', () => {
        const url = '/api/organizations';
        const stub: Data = mocks('organizations');

        remoteService.getAllData().then((data) => expect(data).toEqual(stub));

        const res= providers.httpTestingController.expectOne(url);

        expect(res.request.method).toEqual('GET');

        res.flush(stub);
    });

    afterEach(() => {
        providers.httpTestingController.verify();
    });

    function setProviders() {
        providers = {
            httpClient: TestBed.get(HttpClient),
            httpTestingController: TestBed.get(HttpTestingController),
        };
    }
});
