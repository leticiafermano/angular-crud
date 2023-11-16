import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  openSnackBarCustom(msg: string, isError = false) {
    this.snackbar.open(msg, 'X', {
      duration: 500000000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      // panelClass: isError ? ['msg-erro'] : ['msg-sucesso'],
      panelClass: ['sucesso']
    });
  }
}
