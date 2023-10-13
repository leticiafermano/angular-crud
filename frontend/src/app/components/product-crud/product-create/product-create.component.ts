import { Product } from './../../../shared/model/Interface/product.interface';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemSistema } from 'src/app/shared/enum/mensagem-sistema.enum';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private snackbarService: SnackbarService,
    private router: Router,
    private productService: ProductService
  ) { }

  createProduct():void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.snackbarService.openSnackBarCustom(MensagemSistema.PRODUTO_CRIADO_SUCESSO);
      this.router.navigate(['products']);
    })
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
