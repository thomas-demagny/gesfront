import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserFormService } from 'src/app/forms/user-form.service';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AddressService } from 'src/app/service/address.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  address!: Address;
  user?: User;
  userId!: number;
  userForm!: FormGroup;
  title: string = 'Créer un utilisateur';
  
 
constructor(
  //  private addressService: AddressService,
  //  private addressFormService: AddressFormService,
    private userService: UserService,
    private userFormService: UserFormService,
  //  private orgService: OrganizationService,
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
           /*   this.user = this.address.user;
              this.organization = this.address.organization;*/
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