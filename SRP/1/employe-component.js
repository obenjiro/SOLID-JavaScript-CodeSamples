import { Component, ViewChildren } from '@angular/core';
import { DI } from 'DI';

@Component({
    selector: 'employee',
    templateUrl: 'employee.component.html',
    queries: {
        manager: new ViewChildren('manager')
    }
})
export class EmployeeComponent {
    constructor() {
        this.employeeService = DI.inject('employeeService')
    }
    onEmployeeSubmit(employee) {
        this.employeeService.setProfile()
            .subscribe(() => this.manager.show())
    }
}