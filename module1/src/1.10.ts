{
  // union type

  type FrontendDeveloper = "good" | "bad";
  type FullStackDeveloper = "frontend" | "backend";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "good";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "AB+" | "B+";
  };

  const user1: User = {
    name: "Bob",
    gender: "male",
    bloodGroup: "A+",
  };


  // intersection type
  type FrontendWebDeveloper = {
    skills: string[];
    designation1: "Frontend Web Developer";
  };

  type BackendWebDeveloper = {
    skills: string[];
    designation2: "Backend Web Developer";
  };

  type FullStackWebDeveloper = FrontendWebDeveloper & BackendWebDeveloper;

  const fullStackWebDeveloper: FullStackWebDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Web Developer",
    designation2: "Backend Web Developer"
  }
}
