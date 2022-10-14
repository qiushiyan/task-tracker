import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<number> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}
  onDelete(id: number) {
    this.onDeleteTask.emit(id);
  }

  onToggle(id: number) {
    this.onToggleReminder.emit(id);
  }

  ngOnInit(): void {}
}
