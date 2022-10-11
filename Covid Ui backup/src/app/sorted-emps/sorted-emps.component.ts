import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-sorted-emps',
  templateUrl: './sorted-emps.component.html',
  styleUrls: ['./sorted-emps.component.css']
})
export class SortedEmpsComponent implements OnInit {

  victimsArr:Victims[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllVictims().subscribe(data=>{
      this.victimsArr = data;
    });
  }
  onFormSubmit(filterForm:NgForm){
    this.employeeService.getByFilter(filterForm.value.city).subscribe(data=>{
      this.victimsArr = data;
    });
  }
}
