import {Component,Input} from '@angular/core';
import { NgForm }    from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } 
    from '@angular/forms';
import {LoginService} from './login.service';
import { LoginData} from './logindata';
import { Router, ActivatedRoute }  from '@angular/router';
import { AppComponent} from './app.component';
@Component({
    templateUrl:'/app/views/login.component.html',
   // directives:[REACTIVE_FORM_DIRECTIVES],
    providers:[LoginService]
    
})

export class LoginComponent{
    errorMessage:string;
   data:LoginData[];
   public role:string;
   public c:number=0;
   public url:any;
   public param:LoginData;
   clear:boolean = true;
   countLogin:number;
    constructor(private loginService:LoginService, private router:Router,
    private appComponent:AppComponent
    ){  }
    public user = {
        password:"",
        name:""
    }
    public f:any;
    ngOnInit(){

        if(this.countLogin!=1){
            this.router.navigate(['login'])
            this.appComponent.adminLogout(event);
        }
                this.loginService.getData()
                   .subscribe(
                     data => this.data = data,
                     error =>  this.errorMessage = <any>error
                    //  () => console.log(this.data)
                     );       
                     
            }

     onSubmit(form:any){
        this.data.forEach(element => {
         element.name == this.user.name && element.password == this.user.password ?
          this.provideUrl(element):
         this.c++==this.data.length-1?alert("Wrong Credentials"):"";  
          });//eof loop
          this.c=0;
          this.user= new LoginData;
          this.clear = false;
             this.countLogin++;
    }//eof onSubmit()
   
    provideUrl(element:LoginData){
        window.sessionStorage.setItem("name",element.name)
        window.sessionStorage.setItem("role",element.role);
        this.param = element;
        this.url = element.role == "HR-Manager" || element.role == "HR-Staff" ? "EmployeeList" : "EmployeeResource";
        this.appComponent.unitFunction(element);
        this.router.navigate([this.url]); 
    }

}//eof LoginComponent