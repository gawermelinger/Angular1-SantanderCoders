import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { TaskFiltroComponent } from './components/task-filtro/task-filtro.component';

@NgModule({
  declarations: [AppComponent, TaskFormComponent, TaskListComponent, CurrencyFormatPipe, TaskDetailComponent, TaskTableComponent, DateGreaterThanTodayDirective, TaskFiltroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //importo aqui pra pegar valores do form
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
