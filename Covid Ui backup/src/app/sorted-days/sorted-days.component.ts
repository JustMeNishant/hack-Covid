import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';
@Component({
  selector: 'app-sorted-days',
  templateUrl: './sorted-days.component.html',
  styleUrls: ['./sorted-days.component.css']
})
export class SortedDaysComponent implements OnInit {


 victimsArr:Victims[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllVictims().subscribe(data=>{
      this.victimsArr = data;
    });
  }
  onFormSubmit(filterForm:NgForm){
    this.employeeService.getByFilterDays(filterForm.value.days).subscribe(data=>{
      this.victimsArr = data;
    });
  }

}
