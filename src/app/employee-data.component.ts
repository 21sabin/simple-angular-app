import { Component } from '@angular/core';
import { Employee } from './employee';
import { NgForm } from '@angular/forms';
import { promise } from 'selenium-webdriver';


@Component({
    selector: 'employee-data',
    templateUrl: './employee-data.component.html',
})

export class EmployeeDataComponent {

    id: number;
    name: string;
    address: string;
    gender: string;
    company: string;
    isEditable: boolean;

    //emp: Employee[] = [];

    employees: Employee[] = [
        {
            id: 1,
            name: 'Ram',
            address: 'Kupondole',
            gender: 'Male',
            company: 'XYZ Techno Sales',
            isEditable: false
        },
        {
            id: 2,
            name: 'Shyam',
            address: 'Baneshwor',
            gender: 'Male',
            company: 'ABC Enterprises',
            isEditable: false
        },
        {
            id: 3,
            name: 'Prashansha',
            address: 'Tripureshwor',
            gender: 'Female',
            company: 'MNO Inc',
            isEditable: false
        },
        {
            id: 4,
            name: 'Rita',
            address: 'Ghatthaghar',
            gender: 'Female',
            company: 'Subisu',
            isEditable: false
        }
    ];

    addRow() {
        //prompt("Checking the control!");
        this.employees.push({
            id: this.id,
            name: this.name,
            address: this.address,
            gender: this.gender,
            company: this.company,
            isEditable: this.isEditable
            
        });
    }

    deleteEmployee(index) {
        
        this.employees.splice(index, 1);
    }

    editEmployee(index) {

       debugger;
       this.employees[index].isEditable = true;

    }
}