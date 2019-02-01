import { RouterModule } from '@angular/router';
import { OrganizationListComponent } from './components';

export const OrganizationListRouting = RouterModule.forChild([
    {
        path: '',
        component: OrganizationListComponent,
    },
]);
