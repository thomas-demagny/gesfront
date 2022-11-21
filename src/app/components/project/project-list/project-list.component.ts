import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects!: Project[];
  project!: Project;

  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
   


  ngOnInit(): void {
    this.getProjects();
  }

   

  getProjects() {
    this.projectService.getAll().subscribe(
      (projects) => {
        this.projects = projects;
        
  });
  }

  getProjectById(id: number) {
    this.projectService.getById(id).subscribe(
      (project) => {
        this.project = project;
      });
  }

  update(id: number) {
    this.router.navigate(['user/edit', id]);
  }

  
  delete(id: number) {
    if (confirm(`Etes-vous sûr de vouloir supprimer le projet ?`)) {
    this.projectService.delete(id).subscribe(
      () => {
        this.toastr.success('Le projet a été supprimé avec succès');
        this.getProjects();
      },
      (error: { error: { message: string; }; status: any; }) => {
        this.toastr.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
      }  
      );
    }
  }

}