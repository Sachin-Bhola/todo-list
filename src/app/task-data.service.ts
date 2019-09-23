import { Injectable } from '@angular/core';
import { TASKS } from './mock-data';
import { Task } from './tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  tasks = TASKS;
  completedTask: Task[];
  remainingTask: Task[];

  constructor() { }

  getTask(): Task[] {
    return this.tasks;
  }

  addtask(newTask: string): void {
    this.tasks.push({
      id: this.tasks.length + 1,
      task: newTask,
      status: false
    })
  }

  updateTask(task) {
    this.tasks[task.id - 1].status = task.status;
  }

  getCompletedTask(): Task[] {
    return this.tasks.filter(element => element.status === true);
  }
  getRemainingTask(): Task[] {
    return this.tasks.filter(element => element.status === false);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter(e => e.id !== task.id);
  }

  editTask(task, newTask) {
    this.tasks[task.id - 1].task = newTask;
  }

}
