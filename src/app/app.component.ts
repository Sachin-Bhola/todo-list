import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { TASKS } from './mock-data';
import { Task } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alltasks: Task[];
  constructor(private taskService: TaskDataService) {

  }

  ngOnInit() {
    this.getTasks();

  }

  getTasks(): void {
    this.alltasks = this.taskService.getTask();
  }

  addNewTask(newTask: string) {
    this.taskService.addtask(newTask);
  }


  

}
