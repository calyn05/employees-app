import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      department: 'IT',
      salary: 10000,
    },
    {
      id: 2,
      name: 'Smith',
      department: 'HR',
      salary: 20000,
    },
    {
      id: 3,
      name: 'Mark',
      department: 'IT',
      salary: 30000,
    },
  ];

  constructor() {}
}
