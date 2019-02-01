import { OrganizationListComponent } from '../components';

import { mocks, querySelector } from '../../../../test';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationListServiceMock } from './mocks/organization-list.service.mock';
import { OrganizationListService } from '../services';

describe('Organization list component', () => {
    let spies: any = {};
    let providers: any = {};
    let component: OrganizationListComponent;
    let fixture: ComponentFixture<OrganizationListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                OrganizationListComponent,
            ],
            providers: [
                {
                    provide: OrganizationListService,
                    useClass: OrganizationListServiceMock,
                },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(OrganizationListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        setProviders();
    });

    it ('when the component has been created there should be an instance of it in the component variable and exist correct property in constructor', () => {
        expect(component).toBeDefined();
        expect((component as any).service).toEqual(providers.organizationListService);
    });

    it ('when we make the request to recover the backend data to the service, we should set this data in the model variable', () => {
        const stub = mocks('organizations');

        spies.organizationListService.getAllData.and.returnValue(stub);

        component.ngOnInit();
        fixture.whenStable().then(() => expect(component.model).toEqual(stub));
    });

    describe('when the view has been loaded', () => {

        it ('there should be an h1 when the text "list"', () => {
            const h1Element = querySelector(fixture, 'h1');

            expect(h1Element.textContent).toEqual('list');
        });

        it ('and it has been done when requesting the recovery of the backend data, there should be a list that paints the name property of each element', () => {
            const stub = mocks('organizations');

            spies.organizationListService.getAllData.and.returnValue(stub);

            component.ngOnInit();
            fixture.whenStable().then(() => {
                fixture.detectChanges();

                const list = querySelector(fixture, 'ul > li', true);

                expect(list instanceof NodeList).toBeTruthy();

                let index = 0;
                for (let organization of stub) {
                    expect(list[index++].textContent.trim()).toEqual(organization.name);
                }
            });
        });
    });

    function setProviders() {
        providers = {
            organizationListService: TestBed.get(OrganizationListService),
        };

        setSpies();
    }

    function setSpies() {
        spies = {
            organizationListService: {
                getAllData: spyOn(providers.organizationListService, 'getAllData'),
            },
        };
    }
});
