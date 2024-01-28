import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./core/authentication/auth.routes').then(m => m.AUTH_ROUTES),
    },
    {
        path:'',
        loadChildren:() => import('./modules/module.routes').then(m => m.MODULES_ROUTES),
    },
    {
        path:'**',
        loadComponent:() => import('./shared/not-found/not-found.component').then(m => m.NotFoundComponent),
    },
];
