import { Component, OnInit, inject } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  private _employeeService: EmployeeService = inject(EmployeeService);
  employees!: Employee[];

  constructor() {}

  ngOnInit(): void {
    this.employees = this._employeeService.employees;
  }

  deleteEmployee(id: number) {
    console.log('Delete employee with id: ' + id);
  }
}
