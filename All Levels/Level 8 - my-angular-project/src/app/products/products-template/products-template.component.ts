import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.css']
})
export class ProductsTemplateComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateProduct();
  }

  updateProduct() {
    this.productsService.read().subscribe({
      next: (products) => this.products = products,
      error: (error) => console.log(error),
    });
  }

  update(id: number) {
    this.router.navigate(['editar', id], {
      relativeTo: this.rotaAtiva
    });
  }

  delet(id: number) {
    this.productsService.delete(id).subscribe({
      complete: () => this.updateProduct()
    });
  }

}
