import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dog } from '../classes/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) {
  }

   /**
   * @author : Ricardo Torres
   * @description : Method to get breeds from API
   * @returns : {undefined}
   */
  getAllDogs(breed: string): Observable<Dog> {  
    var apiPath = environment.apidogs.replace("breedname", breed); 
    return this.http.get<Dog>(apiPath);  
  }

}
