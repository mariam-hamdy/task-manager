import { Component, OnInit } from '@angular/core';
import { IList } from './todoList';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  filter: 'all' | 'active' | 'done'= 'all';

  taskList: IList[]=[
    {taskName: 'finish javascript', done: true},
    {taskName: 'finish html', done: false},
    {taskName: 'finish css', done: false},
    {taskName: 'finish angular', done: false},
    {taskName: 'finish node', done: false}  
  ];
  get filteredItems() {
    if(this.filter ==='all') {
      return this.taskList;
    }
    return this.taskList.filter(item => this.filter === 'done'? 
    item.done: !item.done);
  }

  get filteredDoneItems() {
    return this.taskList.filter(item => item.done === false);
  }
  addTask(taskName:string) {
    if(taskName.length > 0 && taskName.trim()) {
      this.taskList.unshift({
        taskName,
        done:false
      })
    }
  }

  remove(item:IList) {
    this.taskList.splice(this.taskList.indexOf(item),1);
  }
  
  clearCompleted() {
    this.taskList = this.filteredDoneItems;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
