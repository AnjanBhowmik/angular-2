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
var employeeData_1 = require('./employeeData');
var router_1 = require('@angular/router');
var EmployeeresourceComponent = (function () {
    function EmployeeresourceComponent(router) {
        this.router = router;
        this.keyLocalStorage = "empResource";
        this.index = -1;
        this.save = true;
        this.clear = true;
        this.employee = new employeeData_1.EmployeeData;
    }
    EmployeeresourceComponent.prototype.ngOnInit = function () {
        window.sessionStorage.getItem("name") ? "" : this.router.navigate(['login']);
        if (localStorage[this.keyLocalStorage]) {
            this.employeesData = this.getDataLocalStorage();
            this.showTable = true;
        }
        else
            this.employeesData = [];
    };
    EmployeeresourceComponent.prototype.empAddData = function () {
        this.employee.token = Math.round((Math.pow(36, 7 + 1) - Math.random() * Math.pow(36, 7))).toString(36).slice(1);
        console.log(this.employee.token);
        if (this.index < 0)
            this.employeesData.unshift(this.employee);
        else {
            this.employeesData.splice(this.index, 1, this.employee);
            this.index = -1;
        }
        this.storeData(this.employeesData);
        this.showTable = true;
        this.reset();
    };
    EmployeeresourceComponent.prototype.reset = function () {
        this.employee = new employeeData_1.EmployeeData;
        this.save = true;
        this.clear = false;
    };
    EmployeeresourceComponent.prototype.editData = function (i) {
        this.index = i;
        this.employee = this.getDataLocalStorage()[i];
        this.save = false;
    };
    EmployeeresourceComponent.prototype.check = function (event, option) {
        console.log(event, option);
    };
    EmployeeresourceComponent.prototype.getDataLocalStorage = function () {
        return JSON.parse(window.localStorage.getItem(this.keyLocalStorage));
    };
    EmployeeresourceComponent.prototype.storeData = function (data) {
        window.localStorage.setItem(this.keyLocalStorage, JSON.stringify(data));
    };
    EmployeeresourceComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/views/employeeresource.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EmployeeresourceComponent);
    return EmployeeresourceComponent;
}());
exports.EmployeeresourceComponent = EmployeeresourceComponent;
//# sourceMappingURL=employeeresource.component.js.map