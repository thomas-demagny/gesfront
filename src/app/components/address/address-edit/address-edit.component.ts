import { Component, OnChanges, OnInit } from '@angular/core';
import { Address } from "../../../models/address";
import { AddressService } from "../../../service/address.service";
import { UserService } from 'src/app/service/user.service';
import { OrganizationService } from 'src/app/service/organization.service';
import { AddressFormService } from 'src/app/forms/address-form.service';
import { ActivatedRoute,Router } from "@angular/router";
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Organization } from 'src/app/models/organization';


@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit, OnChanges {
  address?: Address;
  addressId!: number;
  addressForm!: FormGroup;
  title: string = 'Créer une adresse';



constructor(
    private addressService: AddressService,
    private addressFormService: AddressFormService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router)
     {
      this.addressId = this.route.snapshot.params["id"];

     }
  ngOnInit(): void {
    this.addressForm = this.addressFormService.addressForm();

      if (this.addressId) {
        this.title = "Mettre à jour l'adresse";
        this.ngOnChanges();
    }
  }

  ngOnChanges(): void {
      this.addressService.getById(this.addressId).subscribe(
            (response) => {
              this.address = response;
              this.addressForm.patchValue(this.address);

            });
    }

  get f() {
    return this.addressForm.controls;
  }

  onSubmit() {
    if (this.addressId) {
      if (this.addressForm.value)
      {
        console.log(this.addressForm.value);
        this.addressService.update(this.addressForm.value, this.addressId).subscribe(
          (res) => {
            this.toast.success(
              `L'adresse a bien été modifiée`,
              'Success'
            );
            this.router.navigate(['/address']);
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
      this.addressService.create(this.addressForm.value).subscribe(
        (res) => {
          this.toast.success(
            `L'adresse a été créé`,
            'Success'
          );
          this.addressService.getById(res.id).subscribe();
          this.router.navigate(['/user/new']);
        },
        () => {
          this.toast.error(
            `L'adresse n'a pas été créé`,
            `Error`
          );
        }
      );
    }
  }



}
