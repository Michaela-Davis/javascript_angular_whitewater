import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAboutComponent } from './home-about/home-about.component';
import { RafterListComponent } from './rafter-list/rafter-list.component';
import { RafterDetailComponent } from './rafter-detail/rafter-detail.component';

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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
