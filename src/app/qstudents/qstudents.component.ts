import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-qstudents',
  templateUrl: './qstudents.component.html',
  styleUrl: './qstudents.component.css'
})
export class QstudentsComponent {
  students:any
  constructor(private service:DataService){}

  ngOnInit(){
    this.service.getQualifyStudents().subscribe((s)=>{
      this.students = s 
      console.log(this.students)
    })
  }

  
}
