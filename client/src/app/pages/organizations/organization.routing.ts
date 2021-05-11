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
                loadChildren: () => import('src/app/organizations/list').then(m => m.OrganizationListModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('src/app/organizations/dashboard').then(m => m.OrganizationDashboardModule),
            },
        ],
    },
]);
