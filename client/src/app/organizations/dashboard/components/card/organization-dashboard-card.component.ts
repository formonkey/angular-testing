import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ogn-organization-dashboard-card',
    templateUrl: './organization-dashboard-card.component.html',
    styleUrls: [ './organization-dashboard-card.component.scss' ],
})

export class OrganizationDashboardCardComponent {
    @Input() public readonly text: string;

    @Output('onClick') public readonly fireClick: EventEmitter<string> = new EventEmitter<string>();
}
