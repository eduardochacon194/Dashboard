import { Routes } from '@angular/router';
import { Login } from './components/login/login'; //nombre del  export class Login  del component
import { Menu } from './components/menu/menu'

export const routes: Routes = [{
    path:'',
    redirectTo:'Login',
    pathMatch:'full',
    title: 'Login'
},
{
    path:'Login',
    component:Login,
    title: 'Login'
},
{
    path:'Menu',
    component:Menu,
}
];
