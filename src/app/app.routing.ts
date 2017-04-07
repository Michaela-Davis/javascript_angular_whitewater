import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafterListComponent } from './rafter-list/rafter-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RafterListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
