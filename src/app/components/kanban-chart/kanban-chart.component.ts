import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-kanban-chart',
  templateUrl: './kanban-chart.component.html',
  styleUrls: ['./kanban-chart.component.scss'],
})
export class KanbanChartComponent {
  @Input() tasks: Task[] = [];

  ngOnInit() {
    console.log(this.tasks);
  }
}
