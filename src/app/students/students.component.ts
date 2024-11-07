import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:any
  constructor(private service:DataService){}

  ngOnInit(){
    this.service.getAllStudents().subscribe((s)=>{
      this.students = s 
      console.log(this.students)
    })
  }
}
