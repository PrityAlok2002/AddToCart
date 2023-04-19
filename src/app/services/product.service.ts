import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularfire: AngularFirestore) { }

  createProduct(data:any){
    return new Promise<any>((resolve,reject)=>{
        this.angularfire.collection("productlist").add(data).then((res)=> resolve(res), (err)=> reject(err));
    });
}
}
