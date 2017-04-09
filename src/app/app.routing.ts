import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAboutComponent } from './home-about/home-about.component';
import { RafterListComponent } from './rafter-list/rafter-list.component';
import { RafterDetailComponent } from './rafter-detail/rafter-detail.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeAboutComponent
  },
  {
    path: 'rafters',
    component: RafterListComponent
  },
  {
    path: 'rafters/:id',
    component: RafterDetailComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
