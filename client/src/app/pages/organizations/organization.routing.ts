import { RouterModule } from '@angular/router';
import { OrganizationComponent, OrganizationMenuComponent } from './components';

export const OrganizationRouting = RouterModule.forChild([
    {
        path: '',
        component: OrganizationMenuComponent,
        outlet: 'menu',
    },
    {
        path: '',
        component: OrganizationComponent,
        children: [
            {
                path: 'list',
                loadChildren: 'src/app/organizations/list#OrganizationListModule',
            },
            {
                path: 'dashboard',
                loadChildren: 'src/app/organizations/dashboard#OrganizationDashboardModule',
            },
        ],
    },
]);
