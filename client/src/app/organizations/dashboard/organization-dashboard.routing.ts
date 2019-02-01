import { RouterModule } from '@angular/router';
import { OrganizationDashboardComponent } from './components';

export const OrganizationDashboardRouting = RouterModule.forChild([
    {
        path: '',
        component: OrganizationDashboardComponent,
    },
]);
