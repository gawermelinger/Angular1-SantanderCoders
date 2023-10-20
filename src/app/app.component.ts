import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task.model';

/*export interface IListTask {
  //a interface é como se fosse uma skin, que será usada pela minha listTask
  title: string;
  description: string;
  date: Date;
}*/ //NÃO VOU MAIS PRECISAR DA INTERFACE PORQUE USEI A MODEL!

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'task-list';

  //aqui eu uso a model:
  listTask: Task[] = [];

  //se eu não colocasse a opção de = '' na model, aqui eu teria que passar os mesmos parâmetros do constructor
  selectedTask: Task | null = null;
  taskTable: Task[] = [];

  ngOnInit(): void {
    //aqui dentro, posso fazer chamada de alguma API
  } //uso o onInit aqui, mas tem que lembrar de colocar o implements ali em cima!!

  onAddTask(task: Task) {
    this.listTask.push(task);
    console.log(task);
  }

  handleTask(task: Task) {
    this.selectedTask = task;
    this.taskTable.push(task);
  }

  closeDetail() {
    this.selectedTask = null;
  }
}
