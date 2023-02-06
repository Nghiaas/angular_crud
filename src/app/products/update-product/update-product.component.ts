import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  constructor(private activeteRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeteRoute.params.subscribe(data => {
      this.productId = data['id'];
    });
  }
}
