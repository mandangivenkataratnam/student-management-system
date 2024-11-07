import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  student:any
  addStudent:FormGroup = new FormGroup({})
  constructor(private fb:FormBuilder, private service:DataService,
    private router:Router
  ){
    this.addStudent = this.fb.group({
      studentId:['',Validators.required],
      studentName:['',Validators.required],
      studentClass:['',Validators.required],
      studentPhone:['',Validators.required],
      studentMarks:['',Validators.required]
    })
  }

  addNow(){
    console.log(this.addStudent.value)
    this.student = this.service.addStudents(this.addStudent.value)
    Swal.fire({
      title: "Good job!",
      text: this.student,
      icon: "success"
    });
    this.router.navigateByUrl('/admin/students')
  }
}
