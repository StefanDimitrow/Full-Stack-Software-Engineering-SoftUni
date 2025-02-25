import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { name: 'Pesho', age: 18, },
    { name: 'Anelia', age: 28, },
    { name: 'Gosho', age: 31, },
    { name: 'Tosho', age: 43, }
  ] as User[];
}
