import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {

  alltasks: Task[];
  comTaskNum: number;
  remTaskNum: number;
  newtask: Task;
  taskvalue: string;

  constructor(
    private alltaskservice: TaskDataService,
    private change: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.alltasks = this.alltaskservice.getTask();
    this.completedTaskCount();
    setTimeout(() => {
      this.getTasks();
    });
  }

  updatedTask(task): void {
    this.alltaskservice.updateTask(task);
  }

  completedTaskCount(): void {
    this.comTaskNum = this.alltasks.filter(element => element.status === true).length;
    this.remTaskNum = this.alltasks.filter(element => element.status === false).length;
  }

  deleteTask(task): void {
    this.alltaskservice.deleteTask(task);
  }

  edit(editTask) {
    this.alltaskservice.editTask(this.newtask, editTask)
  }

  display(task) {
    this.newtask = task;
    this.taskvalue = task.task;
  }
}




