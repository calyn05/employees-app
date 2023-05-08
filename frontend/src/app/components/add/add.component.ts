import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css', '../employees/employees.component.css'],
})
export class AddComponent implements OnInit {
  addEmployeeForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
    });
  }
}
