import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'auth', component: AuthLayoutComponent},
    {path: 'blank', component: BlankLayoutComponent},
    {path: '**', component: NotfoundComponent}
];
