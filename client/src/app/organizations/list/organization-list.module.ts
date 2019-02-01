import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OrganizationListComponent } from './components';
import { OrganizationListRouting } from './organization-list.routing';
import { OrganizationListRemoteService, OrganizationListService } from './services';
import { InterceptorHttpClientModule } from '../../core/interceptors/http-client';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        OrganizationListRouting,
        InterceptorHttpClientModule,
    ],
    declarations: [
        OrganizationListComponent,
    ],
    providers: [
        OrganizationListService,
        OrganizationListRemoteService,
    ]
})

export class OrganizationListModule {}
