import { RouterModule } from '@angular/router';

export const BootstrapRouting = RouterModule.forRoot([
    {
        path: '',
        loadChildren: () => import('src/app/pages/organizations').then(m => m.OrganizationModule),
    },
], { relativeLinkResolution: 'legacy' });
