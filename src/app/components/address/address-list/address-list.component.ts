import { Component, OnInit } from '@angular/core';
import {Address} from "../../../models/address";
import {AddressService} from "../../../service/address.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

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
     private toastr: ToastrService,
     private router: Router) {
  }

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses() {
    this.addressService.getAll().subscribe(
      (addresses) => {
        this.addresses = addresses;
      });
  }

  update(id: number) {
    this.router.navigate(['address/edit', id]);
  }

  create() {
    this.router.navigate(['address/edit']);
  }

  delete(id: number) {
    
      if (confirm(`Do want to delete item ${id}`)) {
        this.addressService.delete(id).subscribe(() => {
            this.getAddresses();
          },
          (error: { error: { message: string; }; status: any; }) => {
            this.toastr.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
          });
      }
    }
}
