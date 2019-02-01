import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { querySelector } from '../../../test';
import { BootstrapComponent } from '../components';

describe('Bootstrap component', () => {
    let component: BootstrapComponent;
    let fixture: ComponentFixture<BootstrapComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BootstrapComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BootstrapComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe('when the view has been loaded', () => {
        it ('there should be a router outlet tag with a name attribute with value menu', () => {
            const routerOutletElementMenu = querySelector(fixture, 'router-outlet');

            expect(routerOutletElementMenu).toBeTruthy();
            expect(routerOutletElementMenu.getAttribute('name')).toEqual('menu');
        });

        it ('\'there should be a tag h1 after router outlet with the text "Welcome bootstrap"', () => {
            const element = querySelector(fixture,'router-outlet + h1');

            expect(element).toBeTruthy();
            expect(element.textContent).toEqual('Welcome bootstrap');
        });

        it ('there should be another router router tag after the h1 tag', () => {
            const routerOutletElement = querySelector(fixture,'router-outlet + h1 + router-outlet');

            expect(routerOutletElement).toBeTruthy();
        });
    });
});
