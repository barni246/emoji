import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmojisComponent } from './dialog-emojis.component';

describe('DialogEmojisComponent', () => {
  let component: DialogEmojisComponent;
  let fixture: ComponentFixture<DialogEmojisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEmojisComponent]
    });
    fixture = TestBed.createComponent(DialogEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
