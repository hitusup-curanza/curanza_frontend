import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MarqueeEffectComponent } from '../shared/marquee-effect/marquee-effect.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TripCardComponent } from '../shared/trip-card/trip-card.component';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeatureJourneyComponent } from './components/feature-journey/feature-journey.component';
import { InvitationCardComponent } from './components/invitation-card/invitation-card.component';
import { ScheduleCallComponent } from './schedule-call/schedule-call.component';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,MarqueeEffectComponent,NavbarComponent,FeatureJourneyComponent,ScheduleCallComponent ,InvitationCardComponent,TripCardComponent,IonHeader, IonToolbar, IonTitle],
})
export class HomePage {
  constructor() {}

}
