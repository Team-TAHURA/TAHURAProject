import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FloraPageComponent } from './flora-page/flora-page.component';
import { FaunaPageComponent } from './fauna-page/fauna-page.component';
import { BeritaDetailPageComponent } from './berita-detail-page/berita-detail-page.component';
import { BeritaPageComponent } from './berita-page/berita-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent}, 
  {path: 'gallery-page', component: GalleryPageComponent}, 
  {path: 'contact-page', component: ContactPageComponent}, 
  {path: 'flora-page', component: FloraPageComponent}, 
  {path: 'fauna-page', component: FaunaPageComponent}, 
  {path: 'berita-page', component: BeritaPageComponent}, 
  {path: 'beritaDetail-page', component: BeritaDetailPageComponent}, 
  {path: 'detail-page', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
