import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.logout()
      .then(() => this.zone.run(() => this.router.navigate(['/login'])));
  }
}
