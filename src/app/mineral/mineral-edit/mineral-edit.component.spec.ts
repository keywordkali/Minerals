import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralEditComponent } from './mineral-edit.component';

describe('MineralEditComponent', () => {
  let component: MineralEditComponent;
  let fixture: ComponentFixture<MineralEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineralEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
