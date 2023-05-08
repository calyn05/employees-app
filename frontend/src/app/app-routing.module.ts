import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddComponent } from './components/add/add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: AddComponent },
  { path: 'employees/edit/:id', component: EditComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
