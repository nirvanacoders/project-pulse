import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <section>
      <h2>{{ title }}</h2>
      <label>
        Greeting:
        <input [value]="title" (input)="onTitleChange($event)" />
      </label>
    </section>
  `,
  styles: [
    `section { padding: 1rem; } h2 { margin: 0 0 .5rem; } label { display: block; }`
  ]
})
export class HelloComponent {
  title = 'Welcome to Project Pulse';

  onTitleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.title = target.value;
  }
}
