import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbComponent } from './agb.component';
import { AppModule } from '../../../app.module';

describe('AgbComponent', () => {
  let component: AgbComponent;
  let fixture: ComponentFixture<AgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
