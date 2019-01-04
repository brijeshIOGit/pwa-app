import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Array<any> = []
  constructor(
    private api:ApiService
  ) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    this.api.getUserList().subscribe(data=>{
      
      this.users = data;
      
    })
  }

}
 