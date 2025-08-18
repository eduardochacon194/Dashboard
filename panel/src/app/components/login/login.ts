import { Component, inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule],
  styleUrl: './login.css'
})
export class Login {

    ngOnInit(): void {
    initFlowbite();
  }

  loginobj: any = {
    'EmailId':"",
    'PasswordId': ""
  }

  http = inject(HttpClient);
  router = inject(Router);

  Onlogin(){
    this.http.post("http://localhost:3000/auth/login/", this.loginobj).subscribe((res:any)=>{
      if(res.result){
        debugger;
        this.router.navigateByUrl('menu');
      }
      else{
        alert("failed success");
      }
    })
  }
}
