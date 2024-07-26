import { Component, AfterViewInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FloraService } from '../services/flora.service';
import { FaunaService } from '../services/fauna.service';

declare var Swiper: any;

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements AfterViewInit {
  public flora: any;
  public fauna: any;
  public id: any;
  public type: any;
  private swiperInstance: any;

  constructor(
    private route: ActivatedRoute,
    private floraService: FloraService,
    private faunaService: FaunaService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.type = this.route.snapshot.paramMap.get('type');

      if (this.type === 'flora') {
        this.getFloraDetails();
      } else if (this.type === 'fauna') {
        this.getFaunaDetails();
      }
    });
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.swiperInstance = new Swiper('.container3', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          }
        }
      });
    });
  }

  getFloraDetails() {
    this.floraService.getFloraDetails(this.id).subscribe(
      (flora: any) => {
        this.ngZone.run(() => {
          this.flora = flora;
        });
      },
      error => {
        console.error('Error fetching flora details:', error);
      }
    );
  }

  getFaunaDetails() {
    this.faunaService.getFaunaDetails(this.id).subscribe(
      (fauna: any) => {
        this.ngZone.run(() => {
          this.fauna = fauna;
        });
      },
      error => {
        console.error('Error fetching fauna details:', error);
      }
    );
  }

  getImageUrl(imageData: any): string {
    if (imageData && imageData.data) {
      const blob = new Blob([new Uint8Array(imageData.data)], { type: imageData.contentType });
      return URL.createObjectURL(blob);
    }
    return '../../assets/Images/logoTahura.png';
  }

  handleImageError(event: any, photo: any) {
    console.error('Image loading error for photo:', photo, event);
  }

  updateMainPhoto(index: number) {
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
    }
  }
}
