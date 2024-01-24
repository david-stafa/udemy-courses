abstract class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // console.log(`Department (${this.id}): ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// code for static method
const employee1 = Department.createEmployee("Thomas");
console.log(employee1);

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // this calls constructor of class Department - must be on top before new variables
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

const it = new ITDepartment("1A", ["Max "]);

it.addEmployee("Max");
it.addEmployee("David");

// it.employees[2] = 'Anna' // Does not work becouse the variable is in private

it.describe();
// it.name = 'NEW NAME'
it.printEmployeesInformation();

console.log(it);

// const accountingCopy = { name: "sales", describe: accounting.describe };
// accountingCopy.describe();

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // getter - need to return something
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  //setter
  set setMostRecentReport(value: string) {
    if (!value) {
      throw new Error("PLease pass in a value!");
    }
    this.addReport(value);
  }

  // private is here for singleton logic
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    return this.instance = new AccountingDepartment("d2", []);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

// const accounting = new AccountingDepartment("2A", []);

// creating object using singleton logic
const accounting = AccountingDepartment.getInstance();

accounting.setMostRecentReport = "Hello. This is first report.";
console.log(accounting.mostRecentReport);

accounting.addReport("This is Spring report");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Maxmillian");
console.log(accounting);
