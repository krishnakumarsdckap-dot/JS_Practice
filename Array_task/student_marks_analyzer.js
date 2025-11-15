// 1️⃣ Create Student Data

let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 58 },
  { name: "Charlie", marks: 92 },
  { name: "David", marks: 37 },
  { name: "Eva", marks: 76 }
];
let names=[]
let marks=[]
for(let i=0; i<students.length; i++){
  names.push(students[i].name)
  marks.push(students[i].marks)
}

// 2️⃣ Display All Students
// Use forEach() to display the list of all students and their marks.

// students.forEach((x)=>{
//     console.log(x.name+" - "+x.marks)
// })

// 3️⃣ Calculate Total & Avermarks Marks
// Use the reduce() method to find:

// let totalMark = 0;
// marks.reduce((a,b)=>{
//   return totalMark=a+b
// },0)
// console.log("The Total Mark Of all the students in the Class is : ",totalMark)
// console.log("The Avermarks of the class is : ",totalMark/students.length)

// 4️⃣ Find Highest and Lowest Marks
// Use reduce() or sort() to determine:

// let high = marks.sort((a,b)=>a-b)
// for(let i=0; i<students.length; i++){
//   if(students[i].marks==high[high.length-1]){
//     console.log("The student who have the highest mark : ",students[i].name ,"(",students[i].marks,")")
//   }
//   if(students[i].marks==high[0]){
//     console.log("The student who have the lowest mark : ",students[i].name,"(",students[i].marks,")")
//   }
// }

// 5️⃣ Filter Passing Students
// Use filter() to display students who passed (marks ≥ 40).

// console.log("The students who are passed is given below : ")
// students.filter(x=>{
//   if(x.marks>=40){
//     console.log(x.name,"-",x.marks)
//   }
// })


// 6️⃣ Sort Students by Marks
// Use sort() to arrange students in descending order (highest → lowest).

// console.log("These are the descending order of the students based on the marks :  ")
// let m=marks.sort((a,b)=>{return b-a})
// for(let i=0;i<m.length; i++){
//   for(let j=0;j<students.length;j++){
//     if(m[i]==students[j].marks){
//       console.log(students[j].name,"-",students[j].marks)
//   }
//   }  
// }


// 7️⃣ Display Top 3 Performers

// console.log("These are the top3 performers of this exam " )
// let m=marks.sort((a,b)=>{return b-a})
// let slice=m.slice(0,3)
// for(let i=0; i<slice.length; i++){
//   for(let j=0; j<students.length; j++){
//     if(slice[i]==students[j].marks){
//       console.log(i+1+".",students[j].name,"-",students[j].marks)
//     }
//   }
// }

// Bonus Challenge (Optional for Extra Credit):

function addStudent(){
  let namer = prompt("Enter the name : ")
  let marker = parseInt(prompt("Enter the marks : "))
  let user1={
    name:namer,
    marks:marker
  }
  students.push(user1)
  console.log(students)
}
addStudent()