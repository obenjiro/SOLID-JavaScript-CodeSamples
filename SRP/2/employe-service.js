import { DI } from 'DI';

export class EmployeeService {
    constructor() { }
    setProfile() {
        return {}
    }
}

DI.register(EmployeeService).asKey('employeeService')