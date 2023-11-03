{
  // ternary operator || optional chaining || nulish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 19 ? "adult" : "not adult";
  //   console.log({isAdult});

  // nulish coalescing operator
  // null / undefined --> decision making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Shakib",
    address: {
      city: "Dhaka",
      road: "Mirpur Road",
      presentAddress: "Dhaka",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress);
  //
}
