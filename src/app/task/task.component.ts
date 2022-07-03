import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from '../todo/todoList';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() item!: IList;
  @Output() remove = new EventEmitter<IList>();
  

  changeDone(item:IList) {
    item.done = !item.done;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
