import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  loading : boolean = false;


  constructor(
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar,
    private router : Router
    ) {
    this.form = formBuilder.group({
      usuario : ["", Validators.required],
      password : ["", Validators.required],
      
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(usuario === "Matias" && password === "matias"){
      this.fakeLoading();
    }else{
      this.error();
    }
  
  
  }



  error(){
    this.form.reset()
    this._snackBar.open("Usario o contraseña incorrectos", "Ok", {
      duration : 5000,
      horizontalPosition : "center",
      verticalPosition : 'top'
    });
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(["/dashboard"])
    }, 2000)
  }
}
