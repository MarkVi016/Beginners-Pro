import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsTemplateComponent } from './products-template/products-template.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsFormComponent,
    ProductsTemplateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
