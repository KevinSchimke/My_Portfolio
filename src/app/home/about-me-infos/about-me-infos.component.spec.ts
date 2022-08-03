import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInfosComponent } from './about-me-infos.component';

describe('AboutMeInfosComponent', () => {
  let component: AboutMeInfosComponent;
  let fixture: ComponentFixture<AboutMeInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
