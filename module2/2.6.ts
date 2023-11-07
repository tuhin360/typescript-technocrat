{
  // constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 203,
    name: "Mr.Z",
    email: "mr.z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent({
    id: 201,
    name: "Mr.X",
    email: "mr.x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 202,
    name: "Mr.Y",
    email: "mr.y@gmail.com",
    hasWatch: "Apple",
  });

  //
}
