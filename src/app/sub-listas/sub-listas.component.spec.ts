import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubListasComponent } from './sub-listas.component';

describe('SubListasComponent', () => {
  let component: SubListasComponent;
  let fixture: ComponentFixture<SubListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
