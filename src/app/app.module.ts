import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { RoutingModule, routingComponents } from './routing/routing.module';

import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { ContactComponent } from './contact/contact.component';

import { WindowSizeService } from './window-size.service';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { OurPromiseComponent } from './our-promise/our-promise.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // AboutComponent,
    // HomeComponent,
    // GalleryComponent,
    // ContactComponent,
    routingComponents,
    ImageSliderComponent,
    OurServicesComponent,
    HomeAboutComponent,
    OurPromiseComponent,
    TestimonialsComponent,
    HomeContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  providers: [WindowSizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
