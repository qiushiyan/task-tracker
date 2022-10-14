import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TaskItemComponent,
    AddTaskComponent,
  ],
  providers: [TaskService],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Omit<Task, 'id'>) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((x) => {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    });
  }

  toggleReminder(task: Task) {
    this.taskService.updateReminder(task).subscribe(() => {
      task.reminder = !task.reminder;
    });
  }
}
