import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})

export class ProductsFormComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  product!: Product;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.rotaAtiva.params.subscribe({
      next: (params) => {
        this.id = params['id'];

        if (this.id !== undefined) {
          this.productsService.searchProductById(this.id).subscribe({
            next: (product) => {

              this.product = product;

              this.form = new FormGroup({
                name: new FormControl(product.name, [Validators.required]),
                category: new FormControl(product.category, [Validators.required]),
                price: new FormControl(product.price, [Validators.required]),
                description: new FormControl(product.description, [Validators.required])
              });

            }
          });
        }
      }
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });

  }

  save() {
    const { value: product } = this.form;

    if (this.form.valid) {

      if (this.id !== undefined) {

        const cursoEditado = {
          ...this.product,
          name: product.name,
          category: product.category,
          price: product.price,
          description: product.description
        }

        this.productsService.update(cursoEditado).subscribe();
        this.router.navigate(['/products']);

      } else {
        this.productsService.create(product).subscribe();
        this.router.navigate(['/products']);
      }

    }
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
