let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)

// write Code For the Code challenge
// Prompt user to input the student's mark
let mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));

// Determine the grade based on the mark
let grade;
if (mark > 79) {
  grade = 'A';
} else if (mark >= 60) {
  grade = 'B';
} else if (mark >= 50) {
  grade = 'C';
} else if (mark >= 40) {
  grade = 'D';
} else {
  grade = 'E';
}
// assign the grade to the final output variable
let finalOutput=`The student's grade is ${grade}`;

// Output the grade
console.log(`The student's grade is ${grade}`);
document.getElementById('marks-id').append(finalOutput)


speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
  
// write Code For the Code challenge
// Prompt the user to input the car's speed
let speed = parseInt(prompt("Enter the car's speed:"));

// Determine the number of demerit points 
let points = 0;
if (speed <= 70) {
  console.log('Ok');
} else {
  points = Math.floor((speed - 70) / 5);
  console.log(`Points: ${points}`);
  
  // Check driver's license
  if (points > 12) {
    console.log('License suspended');
  }
}
//assign points to the final output variable
let finalOutput= `Demerit points: ${points}`;
console.log(finalOutput);
    document.getElementById('speed-id').append(finalOutput)

  })


salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)

// write Code For the Code challenge
//prompt user to input basic salary & benefits
let basicSalary = parseInt(prompt("enter your basic salary"));
let benefits= parseInt(prompt("enter your basic benefits"));

//get gross salary
let grossSalary=basicSalary+benefits;
//ger payee
let payee = 0;
if (grossSalary <= 24000) {
  payee = 0;
} else if (grossSalary <= 40000) {
  payee = (grossSalary - 24000) * 0.1;
} else if (grossSalary <= 80000) {
  payee = 1600 + (grossSalary - 40000) * 0.2;
} else if (grossSalary <= 120000) {
  payee = 8800 + (grossSalary - 80000) * 0.25;
} else {
  payee = 20800 + (grossSalary - 120000) * 0.3;
}

//get NHIF deductions
let nhifDeductions = 0;
if (grossSalary <= 5999) {
  nhifDeductions = 150;
} else if (grossSalary <= 7999) {
  nhifDeductions = 300;
} else if (grossSalary <= 11999) {
  nhifDeductions = 400;
} else if (grossSalary <= 14999) {
  nhifDeductions = 500;
} else if (grossSalary <= 19999) {
  nhifDeductions = 600;
} else if (grossSalary <= 24999) {
  nhifDeductions = 750;
} else if (grossSalary <= 29999) {
  nhifDeductions = 850;
} else if (grossSalary <= 34999) {
  nhifDeductions = 900;
} else if (grossSalary <= 39999) {
  nhifDeductions = 950;
} else if (grossSalary <= 44999) {
  nhifDeductions = 1000;
} else if (grossSalary <= 49999) {
  nhifDeductions = 1100;
} else if (grossSalary <= 59999) {
  nhifDeductions = 1200;
} else if (grossSalary <= 69999) {
  nhifDeductions = 1300;
} else if (grossSalary <= 79999) {
  nhifDeductions = 1400;
} else if (grossSalary <= 89999) {
  nhifDeductions = 1500;
} else if (grossSalary <= 99999) {
  nhifDeductions = 1600;
} else {
  nhifDeductions = 1700;
}
//get NSSF deductions
let nssfDeductions=grossSalary*0.06;
//net salary
let netSalary= grossSalary-payee-nhifDeductions-nssfDeductions;

//output
console.log(`Gross salary:${grossSalary}`);
console.log(`Payee:${payee}`);
console.log(`NHIF deductions:${nhifDeductions}`);
console.log(`NSSF deductions:${nssfDeductions}`);
console.log(`Net salary:${netSalary}`);

finalOutput ='assign your final output to this variable'
document.getElementById('salary-id').append(finalOutput)
        
})})