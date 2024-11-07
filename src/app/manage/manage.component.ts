import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  students:any;
  updateStudent:any;
  constructor(private service:DataService){}

  ngOnInit(){
    this.service.getAllStudents().subscribe((s)=>{
      this.students = s 
      console.log(this.students)
    })
  }

  deleteNow(sid:any){
    this.service.deleteStudent(sid)
  }

  studentSelected(pro:any){
    this.updateStudent = pro
  }
  
  updateNow(){
    this.service.upadateStudent(this.updateStudent.studentId,this.updateStudent)
  }

}
