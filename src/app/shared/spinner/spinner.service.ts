import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private active$ = new BehaviorSubject(false);

  enable() {
    this.active$.next(true);
  }

  disable() {
    this.active$.next(false);
  }
}
