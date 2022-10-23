import { Component, OnInit } from '@angular/core';
import {Address} from "../../../models/address";
import {AddressService} from "../../../service/address.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  address!: Address[];

  constructor(
    private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
  }



}
