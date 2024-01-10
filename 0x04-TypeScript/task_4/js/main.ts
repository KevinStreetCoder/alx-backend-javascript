// task_4/js/main.ts
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher: Subjects.Teacher = { firstName: "John", experienceTeachingC: 10 };

// For Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
