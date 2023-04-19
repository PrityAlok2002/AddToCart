import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  grandTotal = 0;
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.grandTotal = this.cartservice.getTotalPrice();
  }


  orderplaced(){
    
  }
}
