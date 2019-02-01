import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { querySelector } from '../../../../test';
import { OrganizationMenuComponent } from '../components/menu';

describe('Organization menu component', () => {
    let component: OrganizationMenuComponent;
    let fixture: ComponentFixture<OrganizationMenuComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                OrganizationMenuComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrganizationMenuComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    it ('When the view has been loaded there should be two links within a list', () => {
        const links = [ '/list', '/dashboard' ];
        const list = querySelector(fixture, 'ul > li', true);

        expect(list.length).toEqual(2);

        let index = 0;
        for (const li of list) {
            expect(li.querySelector('a').getAttribute('ng-reflect-router-link')).toEqual(links[index++]);
        }
    });
});
