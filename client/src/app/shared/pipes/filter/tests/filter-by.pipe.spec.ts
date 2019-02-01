import { Data } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPipe } from '../filter-by.pipe';
import { querySelector } from '../../../../../test';
import { FilterByHostComponentMock } from './mocks/filter-by-host.component.mock';

describe('Filter by pipe', () => {
    let component: FilterByHostComponentMock;
    let fixture: ComponentFixture<FilterByHostComponentMock>;
    let stubs: Data[] = [ { name: 'test' }, { name: 'test2'}, { name: 'test3' } ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FilterByPipe,
                FilterByHostComponentMock,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(FilterByHostComponentMock);
        component = fixture.componentInstance;
    });

    beforeEach(() => {
        component.model = stubs;
        component.attribute = 'name';

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe('when the value variable is defined and a text search is not being done', () => {
        it ('and the value does not exist should not return an empty array', () => {
            component.value = 'test4';
            fixture.detectChanges();

            const list = querySelector(fixture, 'li', true);

            expect(list.length).toEqual(0);
        });

        it ('and the value exists should not return an array with the data found', () => {
            component.value = 'test2';
            fixture.detectChanges();

            const list = querySelector(fixture, 'li', true);

            expect(list.length).toEqual(1);
            expect(list[0].textContent.trim()).toEqual('test2');
        });
    });

    describe('when the value variable is defined and the text search is active', () => {
        it ('and the value does not exist should not return an empty array', () => {
            component.value = 'ss';
            component.isSearch = true;

            fixture.detectChanges();

            const list = querySelector(fixture, 'li', true);

            expect(list.length).toEqual(0);
        });

        it ('and the value exists should not return an array with the data found', () => {
            component.value = '3';
            component.isSearch = true;

            fixture.detectChanges();

            const list = querySelector(fixture, 'li', true);

            expect(list.length).toEqual(1);
            expect(list[0].textContent.trim()).toEqual('test3');
        });
    });
});
