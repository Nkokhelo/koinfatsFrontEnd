import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Koin fast';
  routerUrl: string;

  constructor(private _router: Router) {
    _router.events.subscribe((r) => {
      if (r instanceof NavigationStart) {
        this.routerUrl = r['url'].includes('/auth/')
          ? 'auth'
          : r['url'].includes('/admin/')
          ? 'admin'
          : r['url'].includes('/investor/')
          ? 'investor'
          : 'home';
          console.log(this.routerUrl)
      }
    });

    // _router.navigateByUrl('/auth');
  }
}
