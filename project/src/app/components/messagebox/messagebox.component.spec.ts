import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageboxComponent } from './messagebox.component';
import { AppModule } from '../../app.module';

describe('MessageboxComponent', () => {
  let component: MessageboxComponent;
  let fixture: ComponentFixture<MessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
