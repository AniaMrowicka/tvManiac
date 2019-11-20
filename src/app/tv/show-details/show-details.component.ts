import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Show } from '../tv.models'

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent {
  showDetails: Show
  constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe((params: ShowDetailsParam) => params.showId)
    this.showDetails = this.route.snapshot.data.show
  }
}
