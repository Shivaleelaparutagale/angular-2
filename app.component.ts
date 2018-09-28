import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employee:any[]=[
{id:1,name:"shivaleela",contact:8951262113,email:"shivalela@gmail.com",dob: '02/12/1992',gender:"female",performance: "0.4",salary:80000},
{id:2,name:"shivanand",contact:8951262113,email:"shivanand@gmail.com",dob:'2/02/1989',gender:"male",performance: "0.5",salary:200000},
{id:3,name:"mala",contact:8951278456,email:"mala@gmail.com",dob:'1/12/1964',gender:"female",performance: "0.8",salary:70000},
{id:4,name:"balappa",contact:8891262113,email:"balappa@gmail.com",dob:'2/12/1950',gender:"male",performance: "0.2",salary:800000},
{id:5,name:"prakash",contact:8954532113,email:"prakash@gmail.com",dob:'3/02/1950',gender:"male",performance: "0.4",salary:800000},
{id:6,name:"mahadevi.p",contact:8951256113,email:"mahadevi@gmail.com",dob:'04/06/1964',gender:"female",performance: "0.6",salary:70000}]
}
