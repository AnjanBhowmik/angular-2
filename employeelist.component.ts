import {Component, Input,Output} from '@angular/core';
import { NgForm }    from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } 
    from '@angular/forms';
import {FORM_DIRECTIVES} from '@angular/common';
import { EmployeelistService} from './employeelist.service'
import { EmployeeData} from './employeeData';
import { LoginComponent} from './login.Component';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
    templateUrl:'/app/views/employeelist.component.html',
    providers:[EmployeelistService]
})
export class EmployeelistComponent {
    data:EmployeeData[];
    employeesData:EmployeeData[];
    employee:EmployeeData;
    save:boolean = true;
    block:boolean = false;
    public index:number = -1;
    clear:boolean = true;
    count:number = 0;
   public keyLocalStorage:string="empdata";

    constructor(private employeelistService:EmployeelistService,
    private router:Router){ }

errorMessage:string;
    ngOnInit(){
            window.sessionStorage.getItem("name") ? "" : this.router.navigate(['login']);
        localStorage[this.keyLocalStorage] ? this.employeesData = this.getDataLocalStorage() :
                this.employeelistService.getEmpData()
                   .subscribe(
                     data => this.data = data,
                     error =>  this.errorMessage = <any>error,
                     () => this.storeData(this.data)
                     );                 
                 this.employee = new EmployeeData;

    }
    blurAddMatch(){
        this.employeesData = this.getDataLocalStorage();
        this.employeesData.forEach(element => {
            if(element.id == this.employee.id){
                this.employee = element;
                this.index = this.count;
                this.editData(this.index);
            }
            if(element.id!=this.employee.id)
            this.count++;
        });      
    }

    empAddData(){
            this.data = this.getDataLocalStorage();
        if(this.index < 0){
            this.employee.imageUrl="app/assests/images/default.png";
            this.data.unshift(this.employee);
        }
        else {
            this.data.splice(this.index,1,this.employee);
            this.index = -1;
        }
            this.storeData(this.data);
            this.reset();
     }
    editData(i:number){ 
        this.index = i;
        this.data = this.getDataLocalStorage();
        this.employee = this.data[i]; 
        this.block = true; 
        this.save = false; 
    }
    reset(){
        this.employee = new EmployeeData;
        this.clear = false;
        this.save =  true;
        this.block = false;
    }
     storeData(data:EmployeeData[]){

        window.localStorage.setItem(this.keyLocalStorage,JSON.stringify(this.data));
        this.employeesData = this.data;
    }
    
    getDataLocalStorage(){
        return JSON.parse(window.localStorage.getItem(this.keyLocalStorage));
    }
}