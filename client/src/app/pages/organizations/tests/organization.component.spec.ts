import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { querySelector } from '../../../../test';
import { OrganizationComponent } from '../components';

describe('Organization component', () => {
    let component: OrganizationComponent;
    let fixture: ComponentFixture<OrganizationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                OrganizationComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrganizationComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe('when the view has been loaded', () => {
        it ('there should be a tag h1 with the text "organization"', () => {
            const element = querySelector(fixture,'h1');

            expect(element).toBeTruthy();
            expect(element.textContent).toEqual('organization');
        });

        it ('there should be a router outlet tag after the h1 tag', () => {
            const routerOutletElement = querySelector(fixture, 'h1 + router-outlet');

            expect(routerOutletElement).toBeTruthy();
        });
    });
});
