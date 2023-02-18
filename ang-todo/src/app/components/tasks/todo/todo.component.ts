import { Component, Input, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  @Input() title: string = "Sample title";
  @Input() content: string = "";
  @Input() completed: boolean = false;

  toggleComplete() {
    this.completed = !this.completed;
    if (this.completed) {
      alert(this.title + " completed!");
    }
  }

  deleteSelf() {
    if (this.completed) {
      alert(this.title + " deleted!");
    }
    else {
      alert("Not completed yet!");
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
