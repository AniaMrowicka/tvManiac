import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchComponent } from './search/search.component'
import { HttpClientModule } from '@angular/common/http'
import { PosterComponent } from './poster/poster.component'
import { FormsModule } from '@angular/forms'
import { ShowDetailsComponent } from './show-details/show-details.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
})
export class TvModule {}
