import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimBatchComponent } from './claim-batch.component';

describe('ClaimBatchComponent', () => {
  let component: ClaimBatchComponent;
  let fixture: ComponentFixture<ClaimBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
