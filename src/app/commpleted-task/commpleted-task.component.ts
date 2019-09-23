import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-commpleted-task',
  templateUrl: './commpleted-task.component.html',
  styleUrls: ['./commpleted-task.component.css']
})
export class CommpletedTaskComponent implements OnInit {

  allComTask:Task[];
  comTaskNum:number;
  remTaskNum:number;
  constructor(private taskService:TaskDataService) { }

  ngOnInit() {
    this.getCompletedTask();
  }

    updatedTask(task){
    this.allComTask[task.id-1].status = task.status;
  }

  getCompletedTask(){
    this.allComTask = this.taskService.getCompletedTask();
  }
}
