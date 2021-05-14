import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDetailComponent } from './design-detail.component';

describe('DesignDetailComponent', () => {
  let component: DesignDetailComponent;
  let fixture: ComponentFixture<DesignDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
