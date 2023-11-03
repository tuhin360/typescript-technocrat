{
  // Type alias

    // type aliases for object
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Bob",
    age: 30,
    gender: "Male",
    contactNo: "01724455333",
    address: "New York",
  };

  const student2: Student = {
    name: "Alex",
    age: 25,
    gender: "Male",
    address: "London",
  };
  const student3: Student = {
    name: "John",
    age: 40,
    gender: "Male",
    address: "California",
  };

  type UserName = string;
  const userName: UserName = "Bob";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;


  // type aliases for functions
  type Add = (num1: number, num2: number) => number

  const add: Add = (num1, num2) => num1+num2;

}
