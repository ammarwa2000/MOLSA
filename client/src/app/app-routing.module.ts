// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { StaffEditComponent} from './pages/staff-edit/staff-edit.component';
import { StaffListComponent} from './pages/staff-list/staff-list.component';
import { FmailyEditComponent} from './pages/fmaily-edit/fmaily-edit.component';
import { FmailyListComponent} from './pages/fmaily-list/fmaily-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'staffs/:id',  loadChildren: './pages/staff-edit/staff-edit.module#StaffEditModule' , canActivate: [AuthGuard] },
    { path: 'staffs',  loadChildren: './pages/staff-list/staff-list.module#StaffListModule' , canActivate: [AuthGuard] },
    { path: 'fmailys/:id',  loadChildren: './pages/fmaily-edit/fmaily-edit.module#FmailyEditModule' , canActivate: [AuthGuard] },
    { path: 'fmailys',  loadChildren: './pages/fmaily-list/fmaily-list.module#FmailyListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
