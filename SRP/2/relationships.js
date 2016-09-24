import { DI } from 'DI';

export class Relationships {
    constructor() {
        this.employee = DI.inject('employee');
        this.employeeService = DI.inject('employeeService');
        this.manager = DI.inject('manager');

        this.employee.on('submit', this.onEmployeeSubmit.bind(this))
    }
    onEmployeeSubmit(employee) {
        this.employeeService.setProfile(employee)
            .subscribe(this.onEmployeeSaved)
    }
    onEmployeeSaved() {
        this.manager.show();
    }
}

// https://en.wikipedia.org/wiki/DCI