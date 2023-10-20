import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  //mandar informação do filho para o pai:
  @Output() addTask = new EventEmitter();

  //aqui é onde vou guardar os valores que virão dos inputs:
  public newTask = new Task();

  public submitTask() {
    this.addTask.emit(this.newTask);
    //para não alterar a tarefa cadastrada quando cadastro uma nova:
    this.newTask = new Task();
  }
}
