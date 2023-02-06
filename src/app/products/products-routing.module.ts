import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'list-product', component: ViewAllProductComponent },
  { path: 'seach', component: ViewAllProductsByCategoryComponent },
  { path: 'search-date', component: ViewAllProductsByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
