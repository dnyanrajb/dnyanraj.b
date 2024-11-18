import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementCheckComponent } from './requirement-check.component';

describe('RequirementCheckComponent', () => {
  let component: RequirementCheckComponent;
  let fixture: ComponentFixture<RequirementCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequirementCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequirementCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
