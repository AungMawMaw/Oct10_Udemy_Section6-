import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();

  detailVisiable = signal(false);

  onToggleDetail() {
    this.detailVisiable.update((visible) => !visible);
  }
  onMarkAsComplete() {
    this.close.emit();
  }
}
