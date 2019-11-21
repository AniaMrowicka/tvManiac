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

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, TvModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
