import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './tv/search/search.component'
import { ContactComponent } from './contact/contact.component'
import { ShowDetailsComponent } from './tv/show-details/show-details.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { ShowDetailsResolver } from './tv/show-details/show-details.resolver'
import { LoggedInGuard } from './shared/logged-in.guard'
export interface ShowDetailsParam {
  showId: string
}
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tv', component: SearchComponent },
  {
    path: 'tv/:showId',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowDetailsResolver,
    },
    data: {
      roles: ['admin', 'edytor'],
    },
    canActivate: [LoggedInGuard],
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
