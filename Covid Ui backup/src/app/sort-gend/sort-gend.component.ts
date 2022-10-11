import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';
@Component({
  selector: 'app-sort-gend',
  templateUrl: './sort-gend.component.html',
  styleUrls: ['./sort-gend.component.css']
})
export class SortGendComponent implements OnInit {

  
 victimsArr:Victims[];

 constructor(private employeeService:EmployeeService) { }

 ngOnInit(): void {
   this.employeeService.getAllVictims().subscribe(data=>{
     this.victimsArr = data;
   });
 }
 onFormSubmit(filterForm:NgForm){
   this.employeeService.getByFilterGender(filterForm.value.gender).subscribe(data=>{
     this.victimsArr = data;
   });
 }

}

