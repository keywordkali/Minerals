import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralDetailComponent } from './mineral-detail.component';

describe('MineralDetailComponent', () => {
  let component: MineralDetailComponent;
  let fixture: ComponentFixture<MineralDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineralDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
