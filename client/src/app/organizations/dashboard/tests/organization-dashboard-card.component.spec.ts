import { OrganizationDashboardCardComponent } from '../components/card';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { querySelector } from '../../../../test';

describe('Organization dashboard card component', () => {
    let component: OrganizationDashboardCardComponent;
    let fixture: ComponentFixture<OrganizationDashboardCardComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                OrganizationDashboardCardComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrganizationDashboardCardComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    it ('when the text variable has been set, it should be possible to visualize the content in the small tag', () => {
        (component as any).text = 'Test text';

        fixture.detectChanges();
        const smallElement = querySelector(fixture, 'small');

        expect(smallElement.textContent.trim()).toEqual(component.text);
    });

    it ('when I click on the small tag, an event should be made to the parent component', () => {
        const spyFireClick = spyOn(component.fireClick, 'emit');
        const smallElement = querySelector(fixture, 'small');

        smallElement.click();

        expect(spyFireClick.calls.count()).toEqual(1);
    });
});
