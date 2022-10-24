import { Component, OnInit } from '@angular/core';
import {Address} from "../../../models/address";
import {AddressService} from "../../../service/address.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css'],
  providers: [AddressService]
})
export class AddressListComponent implements OnInit {
  addresses!: Address[];

  constructor(private addressService: AddressService, private router: Router) {
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
    this.addressService.delete(id).subscribe(
      () => {
        this.getAddresses();
      }
    )
  }
}
