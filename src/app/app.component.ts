import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vue';

  mode: number = 1;
  changeMode(id: number): void {
    this.mode = id;
  }
}
