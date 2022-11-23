import { Component, OnInit } from '@angular/core';
import {Organization} from "../../../models/organization";
import {FormGroup} from "@angular/forms";
import {OrganizationFormService} from "../../../forms/organization-form.service";
import {OrganizationService} from "../../../service/organization.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent implements OnInit {
  title: string = 'Créer ';
  organizationForm!: FormGroup;
  organization!: Organization;
  organizationId!: number;

  constructor(
    private orgaFormService: OrganizationFormService,
    private orgService: OrganizationService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.organizationForm = this.orgaFormService.organizationForm();
    this.organizationId = this.route.snapshot.params['id'];
  }

  get f() {
    return this.organizationForm.controls;
  }

  ngOnInit(): void {
    if (this.organizationId) {
      this.title = 'Mettre à jour ';
      this.orgService.getById(this.organizationId).subscribe( (res) => {
        this.organization = res;
        this.organizationForm.patchValue(this.organization);
      });
    }
  }

  onSubmit() {
    if (this.organizationId) {
      this.orgService
        .update(this.organizationForm.value, this.organizationId)
        .subscribe( (res) => {
        this.toastr.success('Organisation mise à jour avec succès');
        this.router.navigate(['/organizations']);
      });
    } else {
      this.orgService.create(this.organizationForm.value).subscribe( (res) => {
        this.toastr.success('Organisation créée avec succès');
        this.router.navigate(['/organizations']);
      });
    }
  }
}
