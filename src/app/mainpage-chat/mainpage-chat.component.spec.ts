import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageChatComponent } from './mainpage-chat.component';

describe('MainpageChatComponent', () => {
  let component: MainpageChatComponent;
  let fixture: ComponentFixture<MainpageChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpageChatComponent]
    });
    fixture = TestBed.createComponent(MainpageChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
