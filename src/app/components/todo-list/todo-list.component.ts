import { IonList } from '@ionic/angular';
import { Task } from './../../classes/task';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "2021-02-28";
  isSubmitted = false;
  taskName: string;
  date: string;
  taskCollection: Task[]=[];
  
  constructor(public formBuilder: FormBuilder) { 
    this.ionicForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(2)]],
      date: ['', [Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
   })
  }

  ngOnInit() {
  }

 submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      var item = this.ionicForm.value;
      this.taskCollection.push(new Task(item.taskName, item.date));
      var item1 = this.taskCollection;

      item1.sort(function(a, b) {
        var nameA = a.taskName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.taskName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });

      this.taskCollection = item1;
    }
  }

}
