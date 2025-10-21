import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { TripCardComponent } from 'src/app/shared/trip-card/trip-card.component';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-feature-journey',
  standalone: true,
  templateUrl: './feature-journey.component.html',
  styleUrls: ['./feature-journey.component.scss'],
  imports: [TripCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureJourneyComponent implements AfterViewInit {

  ngAfterViewInit() {
    new Swiper('.featured-swiper', {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 22,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        progressbarOpposite: false, // forces bottom
      },
    });
  }
}
