import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './component/all-employees/all-employees.component';
import { CovidResponceFormComponent } from './component/covid-responce-form/covid-responce-form.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {SortedEmpsComponent} from  'src/app/sorted-emps/sorted-emps.component'
import {SortedProComponent} from 'src/app/sorted-pro/sorted-pro.component'
import {SortedDaysComponent} from 'src/app/sorted-days/sorted-days.component'
import {SortGendComponent} from 'src/app/sort-gend/sort-gend.component'
import {ManageComponent} from './component/manage/manage.component'
const routes: Routes = [
  {path:'',component:AllEmployeesComponent},
  {path:'covid-responce-form',component:CovidResponceFormComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sortedemp',component:SortedEmpsComponent},
  {path:'sortedemppro',component:SortedProComponent},
  {path:'sortedempday',component:SortedDaysComponent},
  {path:'sortedgend',component:SortGendComponent},
  {path:'manage',component:ManageComponent},
  {path:'**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
