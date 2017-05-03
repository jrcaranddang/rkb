import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
import { OurPromiseComponent } from '../our-promise/our-promise.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { HomeContactComponent } from '../home-contact/home-contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
