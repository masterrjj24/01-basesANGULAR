import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
}
