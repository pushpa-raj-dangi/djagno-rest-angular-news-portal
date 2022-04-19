import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLatestComponent } from './public-latest.component';

describe('PublicLatestComponent', () => {
  let component: PublicLatestComponent;
  let fixture: ComponentFixture<PublicLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
