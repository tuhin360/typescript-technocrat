{
  // destructuring

  // object destructuring
  const user = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      road: "125, Bird street",
      state: "NY",
    },
    job: "Software Engineer",
    country: "USA",
  };

  const {name, address: {city: town}} = user;

  
  // array destructuring
  const myFriends = ["John", "Bob", "Alex", "Henry"];
  const [,,bestFriend, ...rest] = myFriends;



}
