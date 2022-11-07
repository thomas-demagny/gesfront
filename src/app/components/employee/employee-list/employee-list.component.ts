import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../models/employee";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../service/employee.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];
  
  

  constructor(
    private employeeService: EmployeeService, private toastr:ToastrService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe(
      (employees) => {
        this.employees = employees;
      });
  }

  update(id: number) {
    this.router.navigate(['employee/edit', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.employeeService.delete(id).subscribe(() => {
          this.getEmployees();
        },
        (error: { error: { message: string; }; status: any; }) => {
          this.toastr.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }

}
