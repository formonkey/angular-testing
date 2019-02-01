import { ComponentFixture, TestBed } from '@angular/core/testing';

import { debugQueryElement, querySelector } from '../../../../test';
import { OrganizationDashboardCardComponent, OrganizationDashboardComponent } from '../components';
import { By } from '@angular/platform-browser';

describe('Organization dashboard component', () => {
    let component: OrganizationDashboardComponent;
    let fixture: ComponentFixture<OrganizationDashboardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                OrganizationDashboardComponent,
                OrganizationDashboardCardComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrganizationDashboardComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    it ('when you call the function that we are going to pass through output, you should modify the text of the component by adding the end "black"', () => {
        component.onClick(component.text);
        fixture.detectChanges();

        expect(component.text).toEqual('example input black ');
    });

    describe('when the view has been initialized', () => {
        it ('there should be a h1 tag with the correct content', () => {
            const h1Element = querySelector(fixture, 'h1');

            expect(h1Element.textContent).toEqual('dashboard');
        });

        it ('there should be the tag of the dashboard card component with the correct input and ouput', () => {
            const spyOnClick = spyOn(component, 'onClick');

            const selector = 'ogn-organization-dashboard-card';
            const cardElement = querySelector(fixture, selector);
            const debugOnClickEvent = debugQueryElement(fixture, selector).listeners[0];

            expect(spyOnClick.calls.count()).toEqual(0);
            expect(debugOnClickEvent.name).toEqual('onClick');
            expect(cardElement.getAttribute('ng-reflect-text')).toEqual(component.text);

            debugOnClickEvent.callback(component.text);

            expect(spyOnClick.calls.count()).toEqual(1);
        });
    });
});
