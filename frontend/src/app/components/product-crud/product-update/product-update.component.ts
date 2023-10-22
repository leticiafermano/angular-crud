import { SnackbarService } from './../../../shared/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemSistema } from 'src/app/shared/enum/mensagem-sistema.enum';
import { Product } from 'src/app/shared/model/Interface/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readeById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.snackbarService.openSnackBarCustom(
        MensagemSistema.PRODUTO_ATUALIZADO_SUCESSO,
      );
      this.router.navigate(['products']);
    });
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
