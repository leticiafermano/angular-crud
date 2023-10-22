import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from './../../../shared/model/Interface/product.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { TableDataSource } from '../../../shared/source/table.source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];
  
  dataSource = ''; //FAZERR DEPOIS COM O SERVICE - Data Source table criado abaixo

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.readProduct().subscribe(products => {
      this.products = products;
    });    
  }

}
