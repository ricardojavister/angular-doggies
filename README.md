# angular-doggies

This project take advantage of all the power of ionic to create a nice look and feel and combine it with the framework Angular 11.


This project involve 2 operations:

1- Consuming Api from https://dog.ceo/dog-api/
2- Reactive Forms to configure all the validations in a form by using a Validation.Pattern to make sure that all the dates entered by the user are in format
DD/MM/YYY

Intructions to run the Angular Project

1. open the command line and type git clone https://github.com/ricardojavister/angular-doggies.git
2. run the command npm install to download packages used in this project.
3. run ng serve

Routes

Select Breed
http://localhost:4200/selectbreed

https://github.com/ricardojavister/angular-doggies/blob/main/demo-ionic-angular-getting-doggies.gif

http://localhost:4200/todolist

https://github.com/ricardojavister/angular-doggies/blob/main/demo-ionic-angular-validating-form.gif


Technical Explanation

I created 2 services to perform all the operations to consume Apis:

dogService

 getAllDogs(breed: string): Observable<Dog> {  
    var apiPath = environment.apidogs.replace("breedname", breed); 
    return this.http.get<Dog>(apiPath);  
  }

breedService

getAllBreeds(): Observable<Breed> {  
    return this.http.get<Breed>(environment.apibreeds);  
  }

Routing
All the routes allowed are stored in app-routing.module.ts


Packages

ng-image-slider









