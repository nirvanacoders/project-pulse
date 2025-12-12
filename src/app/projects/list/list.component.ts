import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }

  trackById(index: number, p: Project) {
    return p.id;
  }
}