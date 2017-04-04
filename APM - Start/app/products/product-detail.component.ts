import {Component} from '@angular/core'
import {IProduct} from './product'

@Component({
    selector: 'pd-product',
    moduleId: module.id,
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent {
    productTitle: string = "Product Detail";
    product: IProduct;
}