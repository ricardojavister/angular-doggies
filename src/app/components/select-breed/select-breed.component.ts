import { BreedService } from './../../services/breed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from 'src/app/classes/entity';

@Component({
  selector: 'app-select-breed',
  templateUrl: './select-breed.component.html',
  styleUrls: ['./select-breed.component.scss'],
})
export class SelectBreedComponent implements OnInit {
  breeds: any;
  breedsArray: Array<string>;
  breedSelected: string;
  breedCollection: any[] = [];
  constructor(private breedService: BreedService, private _router: Router) { }

  ngOnInit() {
    this.loadBreeds();
  }

  loadBreeds(): void {
    var breedCollection1 = [];
    this.breedService.getAllBreeds().subscribe(data => {
      Object.entries(data.message).forEach(function(i, index){
        breedCollection1.push(new Entity(index, i[0]));
      });
    });
    this.breedCollection = breedCollection1;
  }

  submit(): void {
    this._router.navigate(['/slideshow'], { queryParams: { breed: this.breedSelected } });
  }

  selectChangeHandler(value: any): void {
    this.breedSelected = value;
  }
}
