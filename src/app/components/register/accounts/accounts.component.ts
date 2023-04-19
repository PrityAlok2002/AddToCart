import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {


  isSignedIn = false
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false

  }

  async onSignin(email : string,password : string){
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    alert(`Hey ${email} ,you have just logged in`)
  }
  
  handleLogout(){
    this.isSignedIn = false
  }
}










  
// form : any;

// showmodal !:boolean;
// isSignedIn = false
// constructor(public firebaseService : FirebaseService) { }

//   ngOnInit() {
//     this.form = new FormGroup({
//       email: new FormControl('', Validators.email),
//       password: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9!@#$%^&*()+]+$'),Validators.maxLength(5)])
//     });
//   }

//   clickShowModal(){
//     this.form.reset();
//     this.showmodal = true;
//   }

//   async onSignin(email : string,password : string){
//     await this.firebaseService.signIn(email,password)
//     if(this.firebaseService.isLoggedIn)
//     this.isSignedIn = true
//     alert(`Hey ${email} ,you have just logged in`)
//     this.showmodal = false;
//   }

  
//   handleLogout(){
//     this.isSignedIn = false
//   }
