import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalComponent } from './proposal.component';

describe('ProposalComponent', () => {
  let component: ProposalComponent;
  let fixture: ComponentFixture<ProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should have an offer id equally to 0 or higher after findFreeOfferID', () => {
    component.findFreeOfferID();
    expect(component.getOfferID()).toBeGreaterThanOrEqual(0);
  });

});
