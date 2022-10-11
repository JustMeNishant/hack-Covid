import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';
@Component({
  selector: 'app-sorted-pro',
  templateUrl: './sorted-pro.component.html',
  styleUrls: ['./sorted-pro.component.css']
})
export class SortedProComponent implements OnInit {

 
  victimsArr:Victims[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllVictims().subscribe(data=>{
      this.victimsArr = data;
    });
  }
  onFormSubmit(filterForm:NgForm){
    this.employeeService.getByFilterpro(filterForm.value.project).subscribe(data=>{
      this.victimsArr = data;
    });
  }
}
