import { Component, OnInit } from '@angular/core';
import { IList } from './todoList';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  taskList: IList[]=[
    /*{taskID: 1, taskName: 'finish javascript', done: false},
    {taskID: 2, taskName: 'finish html', done: false},
    {taskID: 3, taskName: 'finish css', done: false},
    {taskID: 4, taskName: 'finish angular', done: false},
    {taskID: 5, taskName: 'finish node', done: false}*/
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
