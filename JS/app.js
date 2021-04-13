'use strict';
//|||||||||||||||||[random integer function :P]|||||||||||||||||||||||
function getRandomInt() {

  return Math.floor(Math.random() * (500 - 100) + 100);
}
//|||||||||||||||||[get local storage ]|||||||||||||||||||||||

if (localStorage.getItem('addEmployee')){
  let addEmp=JSON.parse(localStorage.getItem('addEmployee'));
  for(let i=0;addEmp.length;i++){
    new Employee(addEmployee[i].name,addEmployee[i].email,addEmployee[i].department);

  }
}
//|||||||||||||||||[declare form in JS :D]|||||||||||||||||||||||
let form=document.getElementById('form');
Employee.all=[];


//|||||||||||||||||[Event Listener :D]|||||||||||||||||||||||
form.addEventListener('submit',addEmployee);
function addEmployee(event){
  event.preventDefault();
  let name=event.target.name.value;
  let email=event.target.email.value;
  let department=event.target.department.value;

  let addEmployee =new Employee(name,email,department);
  addEmployee.render();
  //|||||||||||||||||[set local Storage :D]|||||||||||||||||||||||
  localStorage.setItem('new-Emp',JSON.stringify('addEmployee'));
}
//|||||||||||||||||[creating header:D]|||||||||||||||||||||||
let header=['Name','Email','Department','Salary'];
let tableEl=document.getElementById('table');
let tr=document.createElement('tr');
tableEl.appendChild(tr);

for (let i=0;i<header.length;i++){
  let td=document.createElement('td');
  td.textContent=header[i];
  tr.appendChild(td);
}

//|||||||||||||||||[Constructor :D]|||||||||||||||||||||||
function Employee(name,email,department){
  this.name=name;
  this.email=email;
  this.department=department;
  this.salary=getRandomInt();
  Employee.all.push(this);
}

//|||||||||||||||||[prototype :D]|||||||||||||||||||||||
Employee.prototype.render=function(){
  let tr1=document.createElement('tr');
  tableEl.appendChild(tr1);
  let td1=document.createElement('td');
  td1.textContent=this.name;
  tr1.appendChild(td1);

  let td2=document.createElement('td');
  td2.textContent=this.email;
  tr1.appendChild(td2);

  let td3=document.createElement('td');
  td3.textContent=this.department;
  tr1.appendChild(td3);

  let td4=document.createElement('td');
  td4.textContent=this.salary;
  tr1.appendChild(td4);

};

//|||||||||||||||||[Total :D]|||||||||||||||||||||||

