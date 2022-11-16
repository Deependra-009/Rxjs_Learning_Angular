import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestWithLatestFormComponent } from './combine-latest-with-latest-form.component';

describe('CombineLatestWithLatestFormComponent', () => {
  let component: CombineLatestWithLatestFormComponent;
  let fixture: ComponentFixture<CombineLatestWithLatestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestWithLatestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestWithLatestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
