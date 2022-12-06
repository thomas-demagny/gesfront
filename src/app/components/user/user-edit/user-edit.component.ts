import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserFormService } from 'src/app/forms/user-form.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import {Role} from "../../../models/role";
import {RoleService} from "../../../service/role.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user?: User;
  userId!: number;
  userForm!: FormGroup;
  title: string = 'Créer un utilisateur';
  roles!: Role[];
  roleList ; 


constructor(
   
    private userService: UserService,
    private userFormService: UserFormService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router)
     {
      this.userId = this.route.snapshot.params["id"];
     }

    get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.userForm = this.userFormService.userForm();
    this.getRoles();
    
      if (this.userId) {
        this.title = "Mettre à jour";
        this.ngOnChanges();
        }
  }

  ngOnChanges(): void {
      this.userService.getById(this.userId).subscribe(
            (response) => {
              this.user = response;
              this.userForm.patchValue(this.user);
              this.roles = this.user.roles;
              
        });
    }
           

  getRoles() {
    this.roleService.getAll().subscribe(
      (response) => {
        this.roles = response;
      });
  }


  onSubmit() {
    if (this.userId) {
      if (this.userForm.value)
      {
        console.log(this.userForm.value);
        this.userService.update(this.userForm.value, this.userId).subscribe(
          (res) => {
            this.toast.success(
              `L'utilisateur a bien été modifiée`,
              'Success'
            );
            this.router.navigate(['/user']);
          },
          (error) => {
            this.toast.error(
              `${error.error.message.split(';', 1)}`,
              `${error.status}`
            );
          }
        );
      }
    } else {
      this.userService.create(this.userForm.value).subscribe(
        (res) => {
          this.toast.success(
            `L'utilisateur a été créé`,
            'Success'
          );
          this.router.navigate(['/user']);
        },
        (error) => {
          this.toast.error(
            `${error.error.message.split(';', 1)}`,
            `${error.status}`
          );
        }
      );
    }
  }
}