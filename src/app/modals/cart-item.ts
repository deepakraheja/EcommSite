import { Product } from './product.model';
import { Products } from './products.model';

// cart items
export interface CartItem {
  product: Products;
  quantity: number;
}
