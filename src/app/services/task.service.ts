import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3001/tasks';

  constructor(private client: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.client.get<Task[]>(this.apiUrl);
  }

  addTask(task: Omit<Task, 'id'>): Observable<Task> {
    return this.client.post<Task>(this.apiUrl, task, httpOptions);
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.client.delete<Task>(url);
  }

  updateReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.client.put<Task>(
      url,
      { ...task, reminder: !task.reminder },
      httpOptions
    );
  }
}
