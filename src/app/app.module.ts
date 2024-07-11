import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { FloraPageComponent } from './flora-page/flora-page.component';
import { FaunaPageComponent } from './fauna-page/fauna-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BeritaPageComponent } from './berita-page/berita-page.component';
import { BeritaDetailPageComponent } from './berita-detail-page/berita-detail-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GalleryPageComponent,
    FloraPageComponent,
    FaunaPageComponent,
    ContactPageComponent,
    BeritaPageComponent,
    BeritaDetailPageComponent,
    DetailPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
