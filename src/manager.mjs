import { Employee } from "./employee.mjs";

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

export { Manager };