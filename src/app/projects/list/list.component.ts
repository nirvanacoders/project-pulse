import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects$!: Observable<Project[]>;
  searchTerm$ = new Subject<string>();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.searchTerm$.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.projectService.getAll().pipe(
          map(projects => this.filterProjects(projects, term))
        )
      )
    );
  }

  onSearchChange(term: string): void {
    this.searchTerm$.next(term);
  }

  private filterProjects(projects: Project[], term: string): Project[] {
    if (!term.trim()) return projects;
    
    const lowerTerm = term.toLowerCase();
    return projects.filter(p => 
      p.name.toLowerCase().includes(lowerTerm) ||
      p.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
    );
  }

  trackById(index: number, p: Project): number {
    return p.id;
  }
}