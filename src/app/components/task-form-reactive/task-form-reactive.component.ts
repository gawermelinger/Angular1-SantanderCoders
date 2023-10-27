import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss'],
})
export class TaskFormReactiveComponent {
  @Output() addTask = new EventEmitter();
  @Input() taskEdited: Task | null = null;
  @Output() editTask = new EventEmitter();
  form: FormGroup = this.fb.group({
    //no primeiro parâmetro coloco o default e depois os validadores:
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required],
    category: ['toDo', Validators.required],
  });
  ngOnChanges() {
    if (this.taskEdited) {
      this.form.reset({
        ...this.taskEdited,
        date: new Date(this.taskEdited.date).toISOString().split('T')[0],
      });
    }
  }
  constructor(private fb: FormBuilder) {}

  public submitTask() {
    /*this.addTask.emit(this.form.value);
    console.log(this.form.value);
    this.form.reset();*/
    if (this.taskEdited) {
      this.editTask.emit({ ...this.form.value, id: this.taskEdited.id });
    } else {
      this.addTask.emit(this.form.value);
    }
    this.form.reset();
  }
}
