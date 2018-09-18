import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'pb-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {

  constructor(private spinner: SpinnerService) { }

}
