import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ProductService } from 'src/app/services/product.service';
// import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent  {
  productForm = new FormGroup({
    name: new FormControl('' ),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    state: new FormControl(''),
    product_title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    info: new FormControl(''),

  });

  showmodal !:boolean; 
  isSubmitted = true;
  submittedMessage = '';

  constructor(public ProductService : ProductService) { }

addProduct(){
  

  this.ProductService.createProduct(this.productForm.value).then((res)=>{

    this.submittedMessage='Submitted Successfully';
    console.log("Added in firestore" +res);
    // console.log(res)
   })
 
 }

 onSubmit(){
  console.warn(this.productForm.value);
 }

}
