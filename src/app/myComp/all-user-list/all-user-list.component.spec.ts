import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserListComponent } from './all-user-list.component';

describe('AllUserListComponent', () => {
  let component: AllUserListComponent;
  let fixture: ComponentFixture<AllUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
