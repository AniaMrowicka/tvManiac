import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core'
import { Show } from '../tv.models'

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PosterComponent implements OnChanges {
  @Input() show: Show
  imgUrl: string
  private readonly placeholderUrl = 'https://www.fillmurray.com/210/295'
  constructor() {}

  ngOnChanges() {
    this.imgUrl = this.show && this.show.image ? this.show.image.medium : this.placeholderUrl
  }
}
