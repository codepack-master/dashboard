import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModuleComponent } from './grid-module.component';

describe('GridModuleComponent', () => {
  let component: GridModuleComponent;
  let fixture: ComponentFixture<GridModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
