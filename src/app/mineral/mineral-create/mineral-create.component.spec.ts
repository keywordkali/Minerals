import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineralCreateComponent } from './mineral-create.component';

describe('MineralCreateComponent', () => {
  let component: MineralCreateComponent;
  let fixture: ComponentFixture<MineralCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineralCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineralCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
