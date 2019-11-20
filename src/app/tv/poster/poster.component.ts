import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { Show } from '../tv.models'

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PosterComponent implements OnInit {
  @Input() show: Show
  imgUrl: string
  private readonly placeholderUrl = 'https://www.fillmurray.com/210/295'
  constructor() {}

  ngOnInit() {
    this.imgUrl = this.show.image ? this.show.image.medium : this.placeholderUrl
  }
}
