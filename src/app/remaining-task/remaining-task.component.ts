import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-remaining-task',
  templateUrl: './remaining-task.component.html',
  styleUrls: ['./remaining-task.component.css']
})
export class RemainingTaskComponent implements OnInit {

  allRemTask:Task[];

  constructor(private taskService:TaskDataService) { }

  ngOnInit() {
    this.getRemainingTask();
  }

  getRemainingTask(){
    this.allRemTask = this.taskService.getRemainingTask();
  }

}
