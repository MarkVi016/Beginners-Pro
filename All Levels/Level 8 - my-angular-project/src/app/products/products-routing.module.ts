import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTemplateComponent } from './products-template/products-template.component';
import { ProductsFormComponent } from './products-form/products-form.component';

const routes: Routes = [
  { path: '', component: ProductsTemplateComponent },
  { path: 'novo', component: ProductsFormComponent },
  { path: 'editar/:id', component: ProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
