{
  // oop - inharitence

  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep ${numOfHours} hour`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Bob", 30, "London");
  student1.getSleep(4);

  class Teacher extends Person {
    designation : string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address)
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take class ${numberOfClass}`);
    }
  }

  const teacher = new Teacher("Alex", 40, "London", "Lecturer");

  teacher.getSleep(7)
  teacher.takeClass(4)

  //
}
