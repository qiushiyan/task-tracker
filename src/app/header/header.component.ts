import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  providers: [UiService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  ngOnInit(): void {}
}
