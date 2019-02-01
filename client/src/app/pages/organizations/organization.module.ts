import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRouting } from './organization.routing';
import { OrganizationComponent, OrganizationMenuComponent } from './components';

@NgModule({
    imports: [
        CommonModule,

        OrganizationRouting
    ],
    declarations: [
        OrganizationComponent,
        OrganizationMenuComponent,
    ]
})

export class OrganizationModule {}
