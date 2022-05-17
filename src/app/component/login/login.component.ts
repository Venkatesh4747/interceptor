import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: any;

  constructor(private fb:FormBuilder,private api:ServiceService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      user:['',Validators.required],
      mail:['',Validators.required]

    })
  }
methodPost(){
  this.api.postMethod(this.registerForm.value).subscribe((a:any)=>{
console.log('a',a);

  },error=>{
    console.log('error',error.message);

  })
}
}
