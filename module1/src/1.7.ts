{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator
  const bros1: string[] = ["Shakib", "Tamim", "Musfique"];
  const bros2: string[] = ["Afif", "Fiz", "Soumya"];
  bros1.push(...bros2);


  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };


  // learn rest operator

  const greetFriends = (...friends: string[]) => {
     friends.forEach((friend: String))=> console.log(`Hi ${friend}`);
  };
  greetFriends("John", "Bob", "Alex", "Henry", "Doe")








}
