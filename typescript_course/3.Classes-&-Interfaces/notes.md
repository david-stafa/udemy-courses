Object Oriented Programming - OOP

- work with (real-life) Entities in your Code

Objects

- things we work in code
- instance of a class (= based on clases)
-

Claases

- blueprionts for objects
- defines how objects look like, which propertyies and methods they have
- classes make creation of sumilar objects much easier

Public x Private

- public is accesible everywhere
- private is accessible only inside a class - but not in extended classes

Protected

- public + also accesible in extended classes
- still not accesible outside the classes

ReadOnly

- variable that cant be modified
- its set on initialization
- exists only in TS

Union type 
- or (string | number)

Static methhod

-

Abstract classes

- cant be initialized on their own
- They can ba initialialyzed like extended classes

Singleton

- ensures that there is only one instance of single class - one object based on a class

```ts
class AccountingDepartment extends Department {

    private static instance: AccountingDepartment;

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
}

const accounting = AccountingDepartment.getInstance();
```

Interface
- only exist in TS
- it defines structure of an object
- ensures that classes has the inmplementations we want them to have
- can have readonly 

Interface vs Custom type
- type is more flexible
- interface is more clearer