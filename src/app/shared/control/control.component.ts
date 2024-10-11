import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
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
  imports: [CommonModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClickk()',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();

  private el = inject(ElementRef);

  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log(this.el);
  // }
  // /// ame with upper host

  // @ContentChild('input') private controll?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private controll =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  ngAfterContentInit(): void {
    // alert('ngAfterContentInit controll :' + this.controll());
  }

  onClickk() {
    console.log('clicked.');
    // console.log(this.el);
    // alert(this.controll());
    // console.log(this.controll);
  }
}
