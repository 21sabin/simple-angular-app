import { Component } from '@angular/core';
import { Employee } from './employee';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { promise } from 'selenium-webdriver';


@Component({
    selector: 'employee-data',
    templateUrl: './employee-data.component.html',
    styles: [``]
})

export class EmployeeDataComponent {

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        
        this.userForm = this.formBuilder.group({
            'ModalId': [null, Validators.required],
            'ModalName': [null, Validators.required],
            'ModalAddress': [null, Validators.required],
            'ModalCompany': [null, Validators.required]
            
        })

    }

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
            name: 'Prashant',
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
        

        if(this.userForm.valid){
            console.log('inside valid')
            this.id =  this.userForm.controls['ModalId'].value;
            this.name =  this.userForm.controls['ModalName'].value;
            this.address =  this.userForm.controls['ModalAddress'].value;
            this.company =  this.userForm.controls['ModalCompany'].value;
    
            this.employees.push({
                id: this.id,
                name: this.name,
                address: this.address,
                gender: this.gender,
                company: this.company,
                isEditable: this.isEditable
            });
        }else{
        //prompt("Checking the control!");
        console.log('inside invalid')
       
    }
    }

    deleteEmployee(index) {
        
        this.employees.splice(index, 1);
    }

    editEmployee(index) {      

       debugger;
       this.employees[index].isEditable = true;

    }
}