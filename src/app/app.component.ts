import { Component } from '@angular/core'

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tv-maniac'
  //
  // constructor() {
  //   const ADD = 'ADD'
  //
  //   const add =(payload: number) => ({
  //     type: ADD,
  //     payload
  //   })
  //   const values = [
  //     add(2),
  //     { type: 'REMOVE', payload: 4 },
  //     add(6),
  //     { type: 'CLEAR' },
  //   ]
  //   const initialState = 0
  //
  //   const endResult = values.reduce((state, action) => {
  //     switch (action.type) {
  //       case 'ADD':
  //         return state + action.payload
  //       case 'REMOVE':
  //         return state - action.payload
  //       case 'CLEAR':
  //         return initialState
  //     }
  //   }, initialState)
  // }
  handleClick(event: MouseEvent) {
    this.title = event.clientX.toString()
  }
}
