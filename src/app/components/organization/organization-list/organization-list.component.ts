import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organization } from 'src/app/models/organization';
import { OrganizationService } from 'src/app/service/organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
    organizations!: Organization[];

  
  
    constructor(
        private organizationService: OrganizationService, private toastr:ToastrService,
        private router: Router) {
    }
  
    ngOnInit(): void {
      this.getOrganizations();
    }
  
    getOrganizations() {
      this.organizationService.getAll().subscribe(
        (organizations) => {
          this.organizations = organizations;
        });
    }
  
    update(id: number) {
      this.router.navigate(['organization/edit', id]);
    }
  
    delete(id: any) {
      if (confirm(`Etes-vous sûr de vouloir supprimer ce client ?`)) {
        this.organizationService.delete(id).subscribe(
          () => {
            this.toastr.success('L\'utilisateur a été supprimé avec succès');
            this.getOrganizations();
          },
          (error: { error: { message: string; }; status: any; }) => {
            this.toastr.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
          });
      }
    }
  
  }

