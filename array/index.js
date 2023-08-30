const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 },
];
//1.add 3 new students to the students array 
students.push({ name: "Ibrahim", grade: 95 }, { name: "Mahmoud", grade: 85 }, { name: "Yousef", grade: 75 });
console.log(students);

//2.Remove the last Student
students.pop();
console.log(students);

//3.Add Students at Beginning
console.log(students.unshift({ name: "Adam", grade: 92 }));
//or we can use this method : students.unshift({ name: Adam , grade: 92});

//4.Remove First Student
students.shift();
console.log(students);

//5.High Achievers
const highAchievers = (students.filter(students => students.grade > 90));
console.log(highAchievers);

//6.Sort by Grade
highAchievers.sort((a, b) => b.grade - a.grade);
console.log(highAchievers);

//7.Square the Grades
const gradesSquared = (students.map(students => students.grade ** 2));
console.log(gradesSquared);

//8.Total Grade
const totalGradeSum = students.reduce((sum, student) => sum + student.grade, 0);

console.log(totalGradeSum);

//9.Are All Students Passing?
const allAbove60 = students.every(student => student.grade > 60);

console.log(allAbove60);

//10.Is Anyone Failing?
const AllUnder60 = students.every(students => students.grade < 60);
console.log(AllUnder60);

//11.Find First Average Student
const firstStudentReach85 = students.find(student => student.grade === 85);
console.log(firstStudentReach85);