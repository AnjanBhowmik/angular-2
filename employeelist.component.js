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
var employeelist_service_1 = require('./employeelist.service');
var employeeData_1 = require('./employeeData');
var router_1 = require('@angular/router');
var EmployeelistComponent = (function () {
    function EmployeelistComponent(employeelistService, router) {
        this.employeelistService = employeelistService;
        this.router = router;
        this.save = true;
        this.block = false;
        this.index = -1;
        this.clear = true;
        this.count = 0;
        this.keyLocalStorage = "empdata";
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.sessionStorage.getItem("name") ? "" : this.router.navigate(['login']);
        localStorage[this.keyLocalStorage] ? this.employeesData = this.getDataLocalStorage() :
            this.employeelistService.getEmpData()
                .subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; }, function () { return _this.storeData(_this.data); });
        this.employee = new employeeData_1.EmployeeData;
    };
    EmployeelistComponent.prototype.blurAddMatch = function () {
        var _this = this;
        this.employeesData = this.getDataLocalStorage();
        this.employeesData.forEach(function (element) {
            if (element.id == _this.employee.id) {
                _this.employee = element;
                _this.index = _this.count;
                _this.editData(_this.index);
            }
            if (element.id != _this.employee.id)
                _this.count++;
        });
    };
    EmployeelistComponent.prototype.empAddData = function () {
        this.data = this.getDataLocalStorage();
        if (this.index < 0) {
            this.employee.imageUrl = "app/assests/images/default.png";
            this.data.unshift(this.employee);
        }
        else {
            this.data.splice(this.index, 1, this.employee);
            this.index = -1;
        }
        this.storeData(this.data);
        this.reset();
    };
    EmployeelistComponent.prototype.editData = function (i) {
        this.index = i;
        this.data = this.getDataLocalStorage();
        this.employee = this.data[i];
        this.block = true;
        this.save = false;
    };
    EmployeelistComponent.prototype.reset = function () {
        this.employee = new employeeData_1.EmployeeData;
        this.clear = false;
        this.save = true;
        this.block = false;
    };
    EmployeelistComponent.prototype.storeData = function (data) {
        window.localStorage.setItem(this.keyLocalStorage, JSON.stringify(this.data));
        this.employeesData = this.data;
    };
    EmployeelistComponent.prototype.getDataLocalStorage = function () {
        return JSON.parse(window.localStorage.getItem(this.keyLocalStorage));
    };
    EmployeelistComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/views/employeelist.component.html',
            providers: [employeelist_service_1.EmployeelistService]
        }), 
        __metadata('design:paramtypes', [employeelist_service_1.EmployeelistService, router_1.Router])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}());
exports.EmployeelistComponent = EmployeelistComponent;
//# sourceMappingURL=employeelist.component.js.map