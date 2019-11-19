import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() owner = 'me'
  @Output() timePassed = new EventEmitter<number>()

  constructor() {
    setInterval(() => this.timePassed.emit(+new Date()), 2000)
  }

  ngOnInit() {}
}
