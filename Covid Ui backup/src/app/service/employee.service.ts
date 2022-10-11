import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Victimsdto } from '../model/victimdto.model';
import { Victims } from '../model/victims.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
getByfilter(city:string):Observable<Victims[]> {
  return this.http.get<Victims[]>("http://localhost:7007/victims/filter");

}



getByFilter(city: string):Observable<Victims[]> {
  return this.http.get<Victims[]>("http://localhost:7007/get/filter/"+city);
}
getByFilterpro(project: string):Observable<Victims[]> {
  return this.http.get<Victims[]>("http://localhost:7007/get/filterpro/"+project);
}
getByFilterDays(days: number):Observable<Victims[]> {
  return this.http.get<Victims[]>("http://localhost:7007/get/filterdays/"+days);
}
getByFilterGender(gender: string):Observable<Victims[]> {
  return this.http.get<Victims[]>("http://localhost:7007/get/filtergen/"+gender);
}


  insertVictim(victim: Victims):Observable<any> {
    return this.http.post<any>("http://localhost:7007/victim/insert",victim);
  }

  getAllVictims() :Observable<Victims[]>{
    return this.http.get<Victims[]>("http://localhost:7007/victims/all");
  }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:7007/employee/get/all");
  }

  insertVictimDto(victimdto: Victimsdto):Observable<any> {
    return this.http.post<any>("http://localhost:7007/victimdto/insert",victimdto);
  }

}
