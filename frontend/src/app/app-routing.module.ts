import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';	
import { ProductCrudComponent } from './components/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product-crud/product-create/product-create.component';
import { ProductReadComponent } from './components/product-crud/product-read/product-read.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},{
  path: 'products',
  component: ProductCrudComponent
},
{
  path: 'products/create',
  component: ProductCreateComponent
},
{
  path: 'products/read',
  component: ProductReadComponent
},
{
  path: '**',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
