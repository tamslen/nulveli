import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy-screen',
  templateUrl: './dummy-screen.component.html',
  styleUrls: ['./dummy-screen.component.css']
})
export class DummyScreenComponent {
  title = 'Dummy Screen';
  description = 'This is a dummy screen used for testing.';
}
