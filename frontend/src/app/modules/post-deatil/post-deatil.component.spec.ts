import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeatilComponent } from './post-deatil.component';

describe('PostDeatilComponent', () => {
  let component: PostDeatilComponent;
  let fixture: ComponentFixture<PostDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
