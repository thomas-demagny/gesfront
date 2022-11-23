import { Component, OnInit } from '@angular/core';
import {Address} from "../../../models/address";
import {AddressService} from "../../../service/address.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Organization } from 'src/app/models/organization';
import { User } from 'src/app/models/user';
import { OrganizationService } from 'src/app/service/organization.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
  providers: [AddressService]
})
export class AddressListComponent implements OnInit {
  addresses!: Address[];

  constructor(
    private addressService: AddressService,
    private userService: UserService,
    private orgService: OrganizationService,
     private toastr: ToastrService,
     private router: Router) {
  }

  ngOnInit(): void {
    this.getAddresses();


  }

  getAddresses() {
    this.addressService.getAll().subscribe(
      (addresses) => { this.addresses = addresses;

      });
    }



  update(id: number) {
    this.router.navigate(['address/edit', id]);
  }

  delete(id: number) {
      if (confirm(`Voulez-vous supprimer ? ${id}`)) {
        this.addressService.delete(id).subscribe(() => {
            this.getAddresses();
            this.toastr.success(
              'Supprimé avec succès');
          },
          (error) => {
            this.toastr.error(
              `L'adresse n'a pas pu être supprimée`,
              `Suppression`);
          });
      }
    }







}
