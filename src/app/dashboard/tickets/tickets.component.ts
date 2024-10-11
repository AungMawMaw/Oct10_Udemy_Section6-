import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticket_data: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticket_data.title,
      status: 'open',
      request: ticket_data.text,
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((data) => {
      if (data.id === id) {
        return { ...data, status: 'close' };
      }
      return data;
    });
  }
}
