import { RouterModule } from '@angular/router';

export const BootstrapRouting = RouterModule.forRoot([
    {
        path: '',
        loadChildren: 'src/app/pages/organizations#OrganizationModule',
    },
]);
