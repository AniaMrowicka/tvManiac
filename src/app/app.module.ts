import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { TvModule } from './tv/tv.module'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { SharedModule } from './shared/shared.module'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
