import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../data/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  template: `
    <div *ngFor="let todo of todos">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo.id)">Delete</button>
    </div>
  `,
  styles: [],
  providers: [TodoService],
})
export class AppComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  update(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe((todoUpdated: Todo) => {
      this.todos[todoUpdated.id - 1] = todoUpdated;
    });
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
}
