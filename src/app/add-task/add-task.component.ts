import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../Task';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UiService],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = true;
  subscription!: Subscription;

  @Output() onAddTask: EventEmitter<Omit<Task, 'id'>> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.onAddTask.emit(newTask);
  }

  ngOnInit(): void {}
}
