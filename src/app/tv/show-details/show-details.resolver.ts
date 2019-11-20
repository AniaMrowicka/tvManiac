import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Show } from '../tv.models'
import { Observable } from 'rxjs'
import { TvMazeService } from '../tv-maze.service'
import { ShowDetailsParam } from '../../app-routing.module'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ShowDetailsResolver implements Resolve<Show> {
  constructor(private tv: TvMazeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Show> {
    const { showId } = route.params as ShowDetailsParam
    return this.tv.getShow(showId)
  }
}
