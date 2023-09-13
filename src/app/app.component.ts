import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularbasic';
  reilan = 'pogi';

  name: string = '';
  listOfNames: string[] = ['Jay Anne', 'Leah', 'Eric', 'Dado', 'Mary Anne'];
  addName() {
    console.log('add button is working!');
    this.listOfNames.push(this.name);
    console.log(this.listOfNames);
  }
  delete(){
    this.listOfNames.splice(2, 3)
  }
}
