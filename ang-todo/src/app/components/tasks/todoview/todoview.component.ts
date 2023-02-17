import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.scss']
})
export class TodoviewComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos.push(new Todo("Task 1", "Content"));
    this.todos.push(new Todo("Task 2", "Content"));
    this.todos.push(new Todo("Task 3", "Content"));
    this.todos.push(new Todo("Task 4", "Content"));
    this.todos.push(new Todo("Task 5", "Content"));
    this.todos.push(new Todo("Task 6", "Content"));
    this.todos.push(new Todo("Task 7", "Content"));
  }

}
