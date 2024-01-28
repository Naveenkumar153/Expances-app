import { Routes } from "@angular/router";


export const AUTH_ROUTES: Routes = [
    {
        path:'signup',
        loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent),
    },
    {
        path:'signin',
        loadComponent: () => import('./signin/signin.component').then(m => m.SigninComponent),
    },
    {
        path:'forgot-password',
        loadComponent: () => import('./fortget-password/fortget-password.component').then(m => m.FortgetPasswordComponent),
    },
    {
        path:'conform-password',
        loadComponent: () => import('./conform-password/conform-password.component').then(m => m.ConformPasswordComponent),
    }
]