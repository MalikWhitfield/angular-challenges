import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div>Home</div>
  `,
})
export default class HomeComponent {
  private activatedRoute = inject(ActivatedRoute);
}
