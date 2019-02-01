import { Component } from '@angular/core';

@Component({
    templateUrl: './organization-dashboard.component.html',
    styleUrls: [ './organization-dashboard.component.scss' ],
})

export class OrganizationDashboardComponent {
    public text = 'example input';

    public onClick(text) {
        this.text = `${ text } black `;
    }
}
