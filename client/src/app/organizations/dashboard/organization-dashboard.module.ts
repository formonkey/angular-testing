import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationDashboardRouting } from './organization-dashboard.routing';
import { OrganizationDashboardCardComponent, OrganizationDashboardComponent } from './components';

@NgModule({
    imports: [
        CommonModule,

        OrganizationDashboardRouting,
    ],
    declarations: [
        OrganizationDashboardComponent,
        OrganizationDashboardCardComponent,
    ]
})

export class OrganizationDashboardModule {}
