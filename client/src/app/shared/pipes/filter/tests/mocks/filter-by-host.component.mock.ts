import { Component } from '@angular/core';

@Component({
    template: '<ul><li *ngFor="let element of model | filterBy:attribute:value:isSearch"> {{ element[attribute] }}</li></ul>'
})

export class FilterByHostComponentMock {
    public model: object[];
    public attribute: string;
    public isSearch: boolean;
    public value: string | number;
}
