{
  //utility types
  // Pick -->
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit --> means bad daya
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required --> all properties are requiree
  type PersonRequired = Required<Person>;

  // Partial --> all properties are optional
  type PartialRequired = Partial<Person>;

  // ReadOnly

  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr. Bob",
    age: 30,
    contactNo: "017805555777",
  };

  person1.name = "Alex";

  // Record

  //   type MyObg = {
  //     a: string;
  //     b: string
  //   };

  type MyObg = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObg = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };

  //
}
