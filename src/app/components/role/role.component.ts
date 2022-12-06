import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  role!: Role;

  constructor() { }

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    return this.role.roleList;
  }
}
