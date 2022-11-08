import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-user',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: User[];


  constructor(
      private userService: UserService, private toastr:ToastrService,
      private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(
      (users) => {
        this.users = users;
      });
  }

  update(id: number) {
    this.router.navigate(['user/edit', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.userService.delete(id).subscribe(() => {
          this.getUsers();
        },
        (error: { error: { message: string; }; status: any; }) => {
          this.toastr.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }

}
