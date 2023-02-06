import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId = 0;
  constructor(private activeteRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeteRoute.params.subscribe(data => {
      this.productId = data['id'];
    });
  }
}
