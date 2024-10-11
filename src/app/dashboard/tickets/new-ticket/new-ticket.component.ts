import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // ---------------------------------------------
  // onSubmit(
  //   title: HTMLInputElement,
  //   requestValue: string,
  //   form: HTMLFormElement,
  // ) {
  //   console.log(title.value);
  //   console.log(requestValue);
  //   form.reset();
  // }
  // dont use input form   // ---------------------------------------------

  // ----------------------------------jj-----------
  // way2
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // onSubmit() {
  //   this.form?.nativeElement.reset();
  // }
  // end of way 2
  // ---------------------------------------------

  // way3 using signal
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //------------------------ endof view child

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  enteredTitle = '';
  enteredRequest = '';

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log(this.form?.nativeElement);
    // alert('ngOnInit: ' + this.form?.nativeElement);
    /// undefined haha...
  }
  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement);
    // alert('ngAfterViewInit :' + this.form?.nativeElement);
  }

  // onSubmit(title: string, text: string) {
  //   this.add.emit({ title: title, text: text });
  //   this.form?.nativeElement.reset();
  // }
  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredRequest });
    this.form?.nativeElement.reset();
  }
}
