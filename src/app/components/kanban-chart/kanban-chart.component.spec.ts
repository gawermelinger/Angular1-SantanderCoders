import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanChartComponent } from './kanban-chart.component';

describe('KanbanChartComponent', () => {
  let component: KanbanChartComponent;
  let fixture: ComponentFixture<KanbanChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanChartComponent]
    });
    fixture = TestBed.createComponent(KanbanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
