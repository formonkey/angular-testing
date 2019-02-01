import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})

export class FilterByPipe implements PipeTransform {
    public transform(data: object[], attribute: string, value: string | number, isSearch: boolean) {
        return data && data.filter(isSearch ? this.checkSearchText(attribute, value as string) : this.checkValue(attribute, value));
    }

    private checkValue = (attribute: string, value: string | number) =>
        (element: object) =>
            element[attribute] === value;

    private checkSearchText = (attribute: string, value: string) =>
        (element: object) =>
            element[attribute].match(this.getRegex(value));

    private getRegex = (search: string): RegExp =>
        new RegExp(`${ search }`, 'g');
}
