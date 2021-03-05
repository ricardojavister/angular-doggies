import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SlideshowDogComponent } from './components/slideshow-dog/slideshow-dog.component';
import { SelectBreedComponent } from './components/select-breed/select-breed.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy,IonList } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    SelectBreedComponent,
    SlideshowDogComponent,
    TodoListComponent
  ],
  entryComponents: [
    SelectBreedComponent,
    SlideshowDogComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
