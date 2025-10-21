import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MarqueeEffectComponent } from '../shared/marquee-effect/marquee-effect.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TripCardComponent } from '../shared/trip-card/trip-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,MarqueeEffectComponent,NavbarComponent,TripCardComponent],
})
export class HomePage {
  constructor() {}
}
