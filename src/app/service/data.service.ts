import { Injectable } from '@angular/core';
import { student } from './student';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  studentsList:student[]=[
    {
      studentId:1,
      studentName:'Kalyan',
      studentClass:'2',
      studentPhone:'########54',
      studentMarks:'26'
    },
    {
      studentId:2,
      studentName:'Gaya3',
      studentClass:'4',
      studentPhone:'########93',
      studentMarks:'76'
    },
    {
      studentId:3,
      studentName:'Gopi',
      studentClass:'1',
      studentPhone:'########54',
      studentMarks:'16'
    },
    {
      studentId:4,
      studentName:'Vasavi',
      studentClass:'1',
      studentPhone:'########58',
      studentMarks:'82'
    },
    {
      studentId:5,
      studentName:'Uma',
      studentClass:'3',
      studentPhone:'########68',
      studentMarks:'6'
    },
    {
      studentId:6,
      studentName:'Teju',
      studentClass:'3',
      studentPhone:'########37',
      studentMarks:'86'
    },
    {
      studentId:7,
      studentName:'Nikki',
      studentClass:'1',
      studentPhone:'########63',
      studentMarks:'86'
    },
    {
      studentId:8,
      studentName:'Manohar',
      studentClass:'2',
      studentPhone:'########68',
      studentMarks:'8'
    },
    {
      studentId: 9,
      studentName:'Yash',
      studentClass:'2',
      studentPhone:'########34',
      studentMarks:'8'
    },
    {
      studentId:10,
      studentName:'Akash',
      studentClass:'2',
      studentPhone:'########28',
      studentMarks:'11'
    },
    {
      studentId:11,
      studentName:'Sravanthi',
      studentClass:'2',
      studentPhone:'########67',
      studentMarks:'88'
    }
  ]

  getAllStudents(){
    return of(this.studentsList)
  }

  addStudents(newStudent:student){
    this.studentsList.push(newStudent)
    return 'Added SuccessFully'
  }

  deleteStudent(sid:any){
    let index = this.studentsList.findIndex((s)=>s.studentId==sid)
    if(index != -1){
      this.studentsList.splice(index,1)
    }
  }

  getQualifyStudents(){
   return of(this.studentsList.filter((s)=>s.studentMarks>70))
  }

  
  upadateStudent(sid:any,newPro:any){
    let index = this.studentsList.findIndex((s)=>s.studentId==sid)
    if(index != -1){
      this.studentsList.splice(index,1,newPro)
    }
  }



  constructor() { }
}
