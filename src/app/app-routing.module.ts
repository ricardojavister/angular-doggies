import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SlideshowDogComponent } from './components/slideshow-dog/slideshow-dog.component';
import { SelectBreedComponent } from './components/select-breed/select-breed.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'selectbreed', component:SelectBreedComponent},
  {path:'slideshow', component:SlideshowDogComponent},
  {path:'todolist', component:TodoListComponent},
  {
    path: '',
    redirectTo: 'selectbreed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
