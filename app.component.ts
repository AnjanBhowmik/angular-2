import { Component, Input } from '@angular/core';
import { NgForm }    from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-operators';
import { LoginData} from './loginData.ts';
import { Router, ActivatedRoute }  from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: '/app/views/header.html',
    directives: [ROUTER_DIRECTIVES],
    
})
export class AppComponent {
    
    successfullLogin:boolean = false;
    userName:string;
    userRole:string;
    
    constructor(private router:Router){
        this.successfullLogin = window.sessionStorage.getItem("name") ? true:false;
        this.userRole = window.sessionStorage.getItem("role") ? window.sessionStorage.getItem("role"):"";
        this.userName = window.sessionStorage.getItem("name") ? window.sessionStorage.getItem("name"):"";
    }
    unitFunction(obj:LoginData){
        this.successfullLogin=true;
        this.userName=obj.name;
        this.userRole=obj.role;
    }
    adminLogout($event:any){
        this.router.navigate(['login'])
        this.successfullLogin=!this.successfullLogin;
        window.sessionStorage.clear();
    }
}
