import { SnackbarService } from './../../../shared/services/snackbar.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemSistema } from 'src/app/shared/enum/mensagem-sistema.enum';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  constructor(
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  createProduct() {
    this.snackbarService.openSnackBarCustom(MensagemSistema.PRODUTO_CRIADO_SUCESSO);
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
