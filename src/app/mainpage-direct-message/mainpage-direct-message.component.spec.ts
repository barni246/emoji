import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageDirectMessageComponent } from './mainpage-direct-message.component';

describe('MainpageDirectMessageComponent', () => {
  let component: MainpageDirectMessageComponent;
  let fixture: ComponentFixture<MainpageDirectMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpageDirectMessageComponent]
    });
    fixture = TestBed.createComponent(MainpageDirectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
