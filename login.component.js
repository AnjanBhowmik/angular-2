"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_service_1 = require('./login.service');
var logindata_1 = require('./logindata');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var LoginComponent = (function () {
    function LoginComponent(loginService, router, appComponent) {
        this.loginService = loginService;
        this.router = router;
        this.appComponent = appComponent;
        this.c = 0;
        this.clear = true;
        this.user = {
            password: "",
            name: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.countLogin != 1) {
            this.router.navigate(['login']);
            this.appComponent.adminLogout(event);
        }
        this.loginService.getData()
            .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.data.forEach(function (element) {
            element.name == _this.user.name && element.password == _this.user.password ?
                _this.provideUrl(element) :
                _this.c++ == _this.data.length - 1 ? alert("Wrong Credentials") : "";
        }); //eof loop
        this.c = 0;
        this.user = new logindata_1.LoginData;
        this.clear = false;
        this.countLogin++;
    }; //eof onSubmit()
    LoginComponent.prototype.provideUrl = function (element) {
        window.sessionStorage.setItem("name", element.name);
        window.sessionStorage.setItem("role", element.role);
        this.param = element;
        this.url = element.role == "HR-Manager" || element.role == "HR-Staff" ? "EmployeeList" : "EmployeeResource";
        this.appComponent.unitFunction(element);
        this.router.navigate([this.url]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/views/login.component.html',
            // directives:[REACTIVE_FORM_DIRECTIVES],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, app_component_1.AppComponent])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent; //eof LoginComponent
//# sourceMappingURL=login.component.js.map