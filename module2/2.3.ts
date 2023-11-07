{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [2, 4, 6];
  const rollNumbers: GenericArray<number> = [2, 4, 6];

  // const mentors: string[] = ['Peter', 'Mark', 'Alan'];
  const mentors: GenericArray<string> = ["Peter", "Mark", "Alan"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
  };

  type interface  {
    name: string;
    age: number;
  };

  const user: GenericArray<User> = [
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Alex",
      age: 25,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(20, 40);

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    201,
    { name: "Bob", email: "B@gmail.com" },
  ];
}
