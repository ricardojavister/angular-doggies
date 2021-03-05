import { Breed } from './../classes/breed';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Entity } from '../classes/entity';


@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http: HttpClient) {
  }

    /**
   * @author : Ricardo Torres
   * @description : Method to get breeds from API
   * @returns : {undefined}
   */
  getAllBreeds(): Observable<Breed> {  
    return this.http.get<Breed>(environment.apibreeds);  
  }

}
