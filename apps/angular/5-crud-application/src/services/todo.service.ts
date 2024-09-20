import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Observable } from 'rxjs';
import { Todo } from '../data/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify({
        todo: todo.id,
        title: randText(),
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }

  deleteTodo(id: number): void {
    console.log(id);
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
