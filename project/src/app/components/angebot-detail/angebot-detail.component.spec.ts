import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotDetailComponent } from './angebot-detail.component';
import { AppModule } from '../../app.module';

describe('AngebotDetailComponent', () => {
  let component: AngebotDetailComponent;
  let fixture: ComponentFixture<AngebotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngebotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
