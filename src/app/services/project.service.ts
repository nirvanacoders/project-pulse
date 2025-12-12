import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

export interface Project {
  id: number;
  name: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private projects: Project[] = [
    { id: 1, name: 'Project Alpha', tags: ['angular', 'cli'] },
    { id: 2, name: 'Project Beta', tags: ['rxjs', 'http'] },
    { id: 3, name: 'Project Gamma', tags: ['forms', 'routing'] },
  ];

  getAll(): Observable<Project[]> {
    return of(this.projects);
  }
  constructor() { }
}
