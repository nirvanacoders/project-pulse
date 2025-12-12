import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ListComponent } from './projects/list/list.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'projects', component: ListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
