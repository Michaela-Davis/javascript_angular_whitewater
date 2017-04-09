import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { RafterListComponent } from './rafter-list/rafter-list.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { RafterDetailComponent } from './rafter-detail/rafter-detail.component';
import { RafterSortPipe } from './rafter-sort.pipe';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    RafterListComponent,
    HomeAboutComponent,
    RafterDetailComponent,
    RafterSortPipe,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
