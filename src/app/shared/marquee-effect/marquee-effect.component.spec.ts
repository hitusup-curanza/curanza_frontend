import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeEffectComponent } from './marquee-effect.component';

describe('MarqueeEffectComponent', () => {
  let component: MarqueeEffectComponent;
  let fixture: ComponentFixture<MarqueeEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MarqueeEffectComponent]
    });
    fixture = TestBed.createComponent(MarqueeEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
