import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { Victimsdto } from 'src/app/model/victimdto.model';
import { Victims } from 'src/app/model/victims.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-covid-responce-form',
  templateUrl: './covid-responce-form.component.html',
  styleUrls: ['./covid-responce-form.component.css']
})
export class CovidResponceFormComponent implements OnInit {
  status:boolean = true;
  employee:Employee;

  constructor(private employeeService:EmployeeService) { }
  dateV=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  ngOnInit(): void {
  }

  checkDate(covidForm:NgForm){
    let dateToBeCheckOut = new Date(covidForm.value.affectedDate);
    let today = new Date();
    if (dateToBeCheckOut >= today){
      this.status = true;
    }
    else{
      this.status = false;
    }
  }
  condition(sentDate){
    var date1:any = new Date(sentDate);
    var date2:any = new Date();
    var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    let status1: string = "In Recovery"
    let status2:string ="Cured/Critical"
    if(diffDays<14){
      return "In Recovery"
    }
    else{
      return "Critical/Cured"
    }
  }
  
  calculateDiff(sentDate) {
    var date1:any = new Date(sentDate);
    var date2:any = new Date();
    var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  

  onFormSubmit(covidForm:NgForm){

    let victimdto:Victimsdto = {
      employeeid:covidForm.value.id,
      affectedDate:covidForm.value.affectedDate,
      dosages:covidForm.value.dosages,
      docurl:covidForm.value.docurl,
      sickLeaves:this.calculateDiff(covidForm.value.affectedDate),
      status:this.condition(covidForm.value.affectedDate)
      }
      console.log(covidForm.value.docurl)
      window.alert("Applied Successfully")

    this.employeeService.insertVictimDto(victimdto).subscribe();
  }
}