import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectFormService } from 'src/app/forms/project-form.service';
import { Organization } from 'src/app/models/organization';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { OrganizationService } from 'src/app/service/organization.service';
import { ProjectService } from 'src/app/service/project.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit, OnChanges {

  projectForm!: FormGroup;
  project!: Project;
  projectId!: number;
  organizations!: Organization[];
  organization?: Organization;
  users!: User[];
  user?: User;
  title: string = 'Créer ';
  isLoaded: boolean = false;


  constructor(
    private projectFormService: ProjectFormService,
    private projectService: ProjectService,
    private organizationService: OrganizationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ) {
    this.projectId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.projectForm = this.projectFormService.projectForm();
    this.getUsers();
    this.getOrganizations();
    
    if (this.projectId) {
      this.title = 'Mettre à jour ';
      this.ngOnChanges();
    }
    this.isLoaded = true;
   } 
  
  ngOnChanges(): void {
      if (this.projectId) {
        this.projectService.getById(this.projectId).subscribe( (res) => {
          this.project = res;
          this.organization = res.organization;
          this.user = this.project.user;
          this.projectForm.patchValue(this.project);
          
          
        })
            
  };
}
  


  getUsers() {
    this.userService.getAll().subscribe((res) => {
      this.users = res;
    });
  }

  getOrganizations() {
    this.organizationService.getAll().subscribe((res) => {
      this.organizations = res;
    });
  }  
    

  onSubmit() {
    if (this.projectId) {
      if (
        JSON.stringify(this.project) !== JSON.stringify(this.projectForm.value)
      ) {
        this.projectService.update(this.projectForm.value, this.projectId).subscribe(
          (res) => {
            this.toast.success(
              `Le projet a été mis à jour avec succès`,
              'Success'
            );
            this.router.navigate(['/project/']);
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
      this.projectService.create(this.projectForm.value).subscribe(
        (res) => {
          this.toast.success(
            `Le projet a été créé avec succès`,
            'Success'
          );
          this.router.navigate(['/project/']);
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
  
          
        
       

  