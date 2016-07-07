import {Component} from '@angular/core';
import {EmployeeData} from './employeeData'
import { NgForm }    from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } 
    from '@angular/forms';
import {FORM_DIRECTIVES} from '@angular/common';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    templateUrl:'/app/views/employeeresource.component.html'
})

export class EmployeeresourceComponent {
    keyLocalStorage:string="empResource";
    employeesData:EmployeeData[];
    employee:EmployeeData;
    index:number = -1;
    save:boolean = true;
    clear:boolean = true;
    showTable:boolean;
    

    constructor(private router:Router){
        this.employee = new EmployeeData;
    }
    ngOnInit(){
        window.sessionStorage.getItem("name") ? "" : this.router.navigate(['login']);
        if(localStorage[this.keyLocalStorage]){
            this.employeesData = this.getDataLocalStorage();
            this.showTable = true;
        }
            else
            this.employeesData=[];
            }

    empAddData(){ 
        this.employee.token = Math.round((Math.pow(36, 7 + 1) - Math.random() * Math.pow(36, 7))).toString(36).slice(1);
        console.log(this.employee.token)
        if(this.index < 0)
            this.employeesData.unshift(this.employee);
        else{
            this.employeesData.splice(this.index,1,this.employee);
            this.index = -1;
        }
        this.storeData(this.employeesData); 
        this.showTable = true;
        this.reset();   
    }
    reset(){
        this.employee = new EmployeeData;
        this.save = true;
        this.clear = false;
    }
     editData(i:number){ 
         this.index = i;
         this.employee = this.getDataLocalStorage()[i];
         this.save = false;
     }

     check(event:Event,option:any){
         console.log(event,option)

     }

    getDataLocalStorage(){
        return JSON.parse(window.localStorage.getItem(this.keyLocalStorage));
    }

    storeData(data:EmployeeData[]){
        window.localStorage.setItem(this.keyLocalStorage,JSON.stringify(data));
    }
    
}