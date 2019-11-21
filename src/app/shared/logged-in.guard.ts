import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = prompt('Who are you??')
    const hasRoles = route.data.roles.includes(role)
    if (!hasRoles) {
      this.router.navigateByUrl('')
    }
    return hasRoles
  }
}
