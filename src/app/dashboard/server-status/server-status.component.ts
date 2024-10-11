import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { interval } from 'rxjs';

type Status = 'online' | 'offline' | 'unknown';
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// export class ServerStatusComponent implements OnInit, OnDestroy {
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<Status>('online');

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // 1.destroy interval
  // private interval?: ReturnType<typeof setInterval>;
  // constructor() {}
  // ngOnInit() {
  //   this.interval = setInterval(() => {
  //     const random = Math.random();
  //
  //     if (random < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (random < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  //   console.log('test');
  // }
}
