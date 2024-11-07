import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddComponent } from './add/add.component';
import { ManageComponent } from './manage/manage.component';
import { QstudentsComponent } from './qstudents/qstudents.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:NavbarComponent,
    children:[
      {path:'students',component:StudentsComponent},
      {path:'add',component:AddComponent},
      {path:'manage',component:ManageComponent},
      {path:'qstudents',component:QstudentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
