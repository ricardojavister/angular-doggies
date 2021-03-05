import { DogService } from './../../services/dog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Entity } from 'src/app/classes/entity';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';
import { ImageObject } from 'src/app/classes/image';
import { Dog } from 'src/app/classes/dog';

@Component({
  selector: 'app-slideshow-dog',
  templateUrl: './slideshow-dog.component.html',
  styleUrls: ['./slideshow-dog.component.scss'],
})
export class SlideshowDogComponent implements OnInit {

  @ViewChild('nav', { static: false }) ds: NgImageSliderComponent;
  title = 'Doggies Gallery';
  showSlider = true;

  imageObject: Array<object> = [];

  sliderWidth: Number = 940;
  sliderImageWidth: Number = 250;
  sliderImageHeight: Number = 200;
  sliderArrowShow: Boolean = true;
  sliderInfinite: Boolean = false;
  sliderImagePopup: Boolean = true;
  sliderAutoSlide: Boolean = false;
  sliderSlideImage: Number = 1;
  sliderAnimationSpeed: any = 1;

  breed: string;
  dogCollection: Entity[] = [];
  public option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10
  };
  constructor(private _route: ActivatedRoute, private _dogService: DogService) {
  
  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.breed = this._route.snapshot.queryParamMap.get("breed")
    this.loadDogs();
  }

  loadDogs(): void {
    var res = [];
    this._dogService.getAllDogs(this.breed).subscribe(data => {
      Object.entries(data.message).forEach(function (i, index) {
        var item = new ImageObject(i[1],i[1],"","");
        res.push(JSON.parse('{"image": "'+ item.image +'","thumbImage": "'+ item.image +'","title": "Image title","alt": "Image alt"}'));
      });
    })
    this.imageObject = res;
  }

}
