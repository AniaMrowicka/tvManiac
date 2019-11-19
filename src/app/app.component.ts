import { Component } from '@angular/core'

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tv-maniac'

  handleClick(event: MouseEvent) {
    this.title = event.clientX.toString()
  }
}
