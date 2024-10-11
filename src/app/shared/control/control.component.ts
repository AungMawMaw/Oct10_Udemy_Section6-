import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  //   '(click)': 'onClick()',
  // },
})
export class ControlComponent {
  label = input.required<string>();

  private el = inject(ElementRef);

  @HostBinding('class') className = 'control';
  @HostListener('click') onClick() {
    console.log(this.el);
  }

  // onClick() {
  //   // console.log('clicked.');
  //   console.log(this.el);
  // }
}
