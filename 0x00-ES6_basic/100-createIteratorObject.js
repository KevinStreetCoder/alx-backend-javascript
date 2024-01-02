// 100-createIteratorObject.js
export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const departments = Object.keys(allEmployees);

    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        next() {
            if (currentEmployeeIndex < allEmployees[departments[currentDepartmentIndex]].length) {
                return {
                    value: allEmployees[departments[currentDepartmentIndex]][currentEmployeeIndex++],
                    done: false,
                };
            } else {
                currentDepartmentIndex++;
                currentEmployeeIndex = 0;

                if (currentDepartmentIndex < departments.length) {
                    return this.next(); // Recursive call to move to the next department
                } else {
                    return { done: true };
                }
            }
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}
