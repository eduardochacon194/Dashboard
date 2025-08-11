import { Routes } from '@angular/router';
import { Login } from './components/login/login'; //nombre del  export class Login  del component
import { Menu } from './components/menu/menu'

export const routes: Routes = [{
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
},
{
    path:'login',
    component:Login
},
{
    path:'',
    component:Menu,
}
];
