import { ProductService } from 'src/app/shared/services/product.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Product } from 'src/app/shared/model/Interface/product.interface';

export class TesteDataSource extends DataSource<Product> {
  // data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined; //Ordena os dados

  constructor(private productService: ProductService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      return merge(
        observableOf(null),
        this.paginator.page,
        this.sort.sortChange
        ).pipe(
          map(() => {
            // return this.getPagedData(this.getSortedData([...this.data ]));
            return this.getData();
          })
          );
        } else if {
          throw Error(
            'Please set the paginator and sort on the data source before connecting.'
      );
    } else {
      return observableOf([]);
    }
  }

  disconnect(): void {}

  private getData(): Observable<Product[]> {
    const page = this.paginator?.pageIndex;
    const pageSize = this.paginator?.pageSize;

    return this.productService.readProduct(page, pageSize).pipe(
      map(data => {
        this.paginator.length = data.length;
        return this.getSortedData(data);
      })
    );
  }

  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc: boolean = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * order;
}
