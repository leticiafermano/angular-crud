import { MensagemSistema } from 'src/app/shared/enum/mensagem-sistema.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/Interface/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
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
    const id = this.route.snapshot.paramMap.get('id');
    if(id !==null) {
      this.productService.readeById(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  deleteProduct() {
    if (this.product.id) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.snackbarService.openSnackBarCustom(
          MensagemSistema.PRODUTO_EXCLUIDO_SUCESSO
        );
        this.router.navigate(['products']);
      });
    }
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
