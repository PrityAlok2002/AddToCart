import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isSignedIn = false;
  signupMessage='';
  constructor(public firebaseService : FirebaseService) { }

  
  ngOnInit(): void {
    // if(localStorage.getItem('user')!==null)
    // this.isSignedUp = true
    // else
    // this.isSignedUp = false

  }

  async onSignup(email:string,password:string){


    await this.firebaseService.signUp(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    // this.signupMessage='Registered Successfully';
    alert(`Hey, you have just registered`)
  }
}






//   isSignedIn = false;
//   constructor(public firebaseService : FirebaseService) { }

//   ngOnInit(): void {
//   }

//   async onSignup(email:string,password:string){


//     await this.firebaseService.signUp(email,password)
//     if(this.firebaseService.isLoggedIn)
//     this.isSignedIn = true
//     alert(`${email} ,REGISTERED SUCCESSFULLY`)
//   }
  