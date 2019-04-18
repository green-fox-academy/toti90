`use strict`
export{}

// Create Student and Teacher classes
// Student
//   learn()
//   question(teacher) -> calls the teachers answer method
// Teacher
//   teach(student) -> calls the students learn method
//   answer()

class Student {
  learn() {
    console.log("Student learn method")
  }
  question(teacher: Teacher) {
    teacher.answer()
  }
}

class Teacher {
  teach(student: Student) {
    student.learn()
  }
  answer() {
    console.log("Teacher answer method")
  }
}

let student = new Student
let teacher = new Teacher
student.question(teacher)