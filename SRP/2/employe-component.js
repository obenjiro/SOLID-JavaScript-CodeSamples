import { Component, ViewChildren, EventEmitter } from '@angular/core';
import { DI } from 'DI';

@Component({
    selector: 'employee',
    templateUrl: 'employee.component.html',
    outputs: [
        'submit'
    ]
})
export class EmployeeComponent {
    constructor() {
        DI.register(this).asKey('employee');
        this.submit = new EventEmitter();
    }
    onEmployeeSubmit(employee) {
        this.submit.next(employee)
    }
}