import { Routes } from '@angular/router';
import { Home } from './home/home';
// import { About } from './about/about';
import { Notfound } from './notfound/notfound';
import { Blog } from './blog/blog';

export const routes: Routes = [
    {path:'' , redirectTo: 'home' ,pathMatch:'full'},
    {path:'home' , component: Home},
    {path:'about' , loadComponent : ()=> import('./about/about').then((c)=>c.About)},
    {path:'blog' , component: Blog},
    {path:'**' , component: Notfound}
];
