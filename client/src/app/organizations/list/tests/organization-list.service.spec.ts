import { TestBed } from '@angular/core/testing';

import { mocks } from '../../../../test';
import { OrganizationListRemoteService, OrganizationListService } from '../services';
import { OrganizationListRemoteServiceMock } from './mocks/organization-list-remote.service.mock';

describe('Organization list service', () => {
    let spies: any;
    let providers: any;
    let service: OrganizationListService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                OrganizationListService,
                {
                    provide: OrganizationListRemoteService,
                    useClass: OrganizationListRemoteServiceMock,
                },
            ],
        });

        service = TestBed.get(OrganizationListService);

        setProviders();
    });

    it ('when the module has been initialized there should be an instance of our class in the service variable and the correct properties in the constructor', () => {
        expect(service).toBeDefined();
        expect((service as any).remoteService).toEqual(providers.organizationListRemoteService);
    });

    it ('when we make a request to the remote service we should recover all the correct list', async () => {
        const stub = mocks('organizations');

        spies.organizationRemoteService.getAllData.and.returnValue(stub);

        expect(await service.getAllData()).toEqual(stub);
    });

    function setProviders() {
        providers = {
            organizationListRemoteService: TestBed.get(OrganizationListRemoteService),
        };

        setSpies();
    }

    function setSpies() {
        spies = {
            organizationRemoteService: {
                getAllData: spyOn(providers.organizationListRemoteService, 'getAllData'),
            },
        };
    }
 });
