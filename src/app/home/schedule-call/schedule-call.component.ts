import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-schedule-call',
  templateUrl: './schedule-call.component.html',
  styleUrls: ['./schedule-call.component.scss'],
  standalone: true,
  imports: [NgIf,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton]
})
export class ScheduleCallComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

    showSection = false; // initial state: hidden

  toggleSection() {
    this.showSection = !this.showSection; // toggle boolean
  }

}
