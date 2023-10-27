import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}
  form: FormGroup = this.fb.group({
    //no primeiro parâmetro coloco o default e depois os validadores:
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required],
    category: ['toDo', Validators.required],
    tags: this.fb.array([]),
  });
  ngOnChanges() {
    if (this.taskEdited) {
      this.form.reset({
        ...this.taskEdited,
        date: new Date(this.taskEdited.date).toISOString().split('T')[0],
      });
    }
  }
  get tags() {
    return this.form.get('tags') as FormArray;
  }

  public submitTask() {
    /*this.addTask.emit(this.form.value);
    console.log(this.form.value);
    this.form.reset();*/
    if (this.taskEdited) {
      this.editTask.emit({ ...this.form.value, id: this.taskEdited.id });
    } else {
      this.addTask.emit(this.form.value);
    }
    console.log(this.form.value);
    this.form.reset();
    for (let i = 0; i < this.tags.controls.length; i++) {
      this.tags.removeAt(0);
    }
  }

  addTags() {
    this.tags.push(this.fb.control(''));
  }
}
