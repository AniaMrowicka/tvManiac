import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './tv/search/search.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tv', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
