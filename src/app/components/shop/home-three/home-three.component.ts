import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { ProductsService } from 'src/app/Service/Products.service';
import { Products } from 'src/app/modals/products.model';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.sass']
})
export class HomeThreeComponent implements OnInit {

  public Popularproducts: Products[] = [];

  public slides: Products[] = [];

  products: Product[];
  public banners = [];

  shoppingCartItems: CartItem[] = [];
  wishlistItems: Product[] = [];

  public featuredProducts: Array<Product>;
  public onSaleProducts: Array<Product>;
  public topRatedProducts: Array<Product>;
  public newArrivalsProducts: Array<Product>;

  // public slides = [
  //   { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/kurti.jpg' },
  //   { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/skirts.jpg' },
  //   { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/shirt.jpg' },
  //   { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/top.jpg' },
  //   { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/tshirt.jpg' }
  // ];



  // public slides =[{
  //   "productID": 1,
  //   "productName": null,
  //   "shortDetails": "",
  //   "description": "",
  //   "supplierID": 0,
  //   "brandId": 0,
  //   "productAvailable": false,
  //   "createdBy": 0,
  //   "modifiedby": 0,
  //   "featured": false,
  //   "latest": false,
  //   "onSale": false,
  //   "topSelling": false,
  //   "hotOffer": false,
  //   "active": false,
  //   "subcatecode": null,
  //   "subcategoryName": null,
  //   "subCategoryID": 0,
  //   "categoryID": 0,
  //   "brandName": null,
  //   "bannerImg": null,
  //   "smallImg": null,
  //   "productImg": null,
  //   "rowID": null,
  //   "type": null,
  //   "imagePath": null,
  //   "title": "Huge sale",
  //   "subTitle": "Up to 70%",
  //   "bannerImage": "http://localhost:5205/ProductImage/1/bannerImage/kurti.png",
  //   "frontImage": null,
  //   "productImageId": 0,
  //   "small": "",
  //   "large": ""
  // }, {
  //   "productID": 2,
  //   "productName": null,
  //   "shortDetails": "",
  //   "description": "",
  //   "supplierID": 0,
  //   "brandId": 0,
  //   "productAvailable": false,
  //   "createdBy": 0,
  //   "modifiedby": 0,
  //   "featured": false,
  //   "latest": false,
  //   "onSale": false,
  //   "topSelling": false,
  //   "hotOffer": false,
  //   "active": false,
  //   "subcatecode": null,
  //   "subcategoryName": null,
  //   "subCategoryID": 0,
  //   "categoryID": 0,
  //   "brandName": null,
  //   "bannerImg": null,
  //   "smallImg": null,
  //   "productImg": null,
  //   "rowID": null,
  //   "type": null,
  //   "imagePath": null,
  //   "title": "Biggest discount",
  //   "subTitle": "Check the promotion",
  //   "bannerImage": "http://localhost:5205/ProductImage/2/bannerImage/skirts.png",
  //   "frontImage": null,
  //   "productImageId": 0,
  //   "small": "",
  //   "large": ""
  // }, {
  //   "productID": 3,
  //   "productName": null,
  //   "shortDetails": "",
  //   "description": "",
  //   "supplierID": 0,
  //   "brandId": 0,
  //   "productAvailable": false,
  //   "createdBy": 0,
  //   "modifiedby": 0,
  //   "featured": false,
  //   "latest": false,
  //   "onSale": false,
  //   "topSelling": false,
  //   "hotOffer": false,
  //   "active": false,
  //   "subcatecode": null,
  //   "subcategoryName": null,
  //   "subCategoryID": 0,
  //   "categoryID": 0,
  //   "brandName": null,
  //   "bannerImg": null,
  //   "smallImg": null,
  //   "productImg": null,
  //   "rowID": null,
  //   "type": null,
  //   "imagePath": null,
  //   "title": "Biggest sale",
  //   "subTitle": "Dont miss it",
  //   "bannerImage": "http://localhost:5205/ProductImage/3/bannerImage/shirt.png",
  //   "frontImage": null,
  //   "productImageId": 0,
  //   "small": "",
  //   "large": ""
  // }, {
  //   "productID": 4,
  //   "productName": null,
  //   "shortDetails": "",
  //   "description": "",
  //   "supplierID": 0,
  //   "brandId": 0,
  //   "productAvailable": false,
  //   "createdBy": 0,
  //   "modifiedby": 0,
  //   "featured": false,
  //   "latest": false,
  //   "onSale": false,
  //   "topSelling": false,
  //   "hotOffer": false,
  //   "active": false,
  //   "subcatecode": null,
  //   "subcategoryName": null,
  //   "subCategoryID": 0,
  //   "categoryID": 0,
  //   "brandName": null,
  //   "bannerImg": null,
  //   "smallImg": null,
  //   "productImg": null,
  //   "rowID": null,
  //   "type": null,
  //   "imagePath": null,
  //   "title": "Our best products",
  //   "subTitle": "Special selection",
  //   "bannerImage": "http://localhost:5205/ProductImage/4/bannerImage/top.jpg",
  //   "frontImage": null,
  //   "productImageId": 0,
  //   "small": "",
  //   "large": ""
  // }, {
  //   "productID": 5,
  //   "productName": null,
  //   "shortDetails": "",
  //   "description": "",
  //   "supplierID": 0,
  //   "brandId": 0,
  //   "productAvailable": false,
  //   "createdBy": 0,
  //   "modifiedby": 0,
  //   "featured": false,
  //   "latest": false,
  //   "onSale": false,
  //   "topSelling": false,
  //   "hotOffer": false,
  //   "active": false,
  //   "subcatecode": null,
  //   "subcategoryName": null,
  //   "subCategoryID": 0,
  //   "categoryID": 0,
  //   "brandName": null,
  //   "bannerImg": null,
  //   "smallImg": null,
  //   "productImg": null,
  //   "rowID": null,
  //   "type": null,
  //   "imagePath": null,
  //   "title": "Massive sale",
  //   "subTitle": "Only for today",
  //   "bannerImage": "http://localhost:5205/ProductImage/5/bannerImage/tshirt.jpg",
  //   "frontImage": null,
  //   "productImageId": 0,
  //   "small": "",
  //   "large": ""
  // }]

  constructor(private productService: ProductService,
    private cartService: CartService,
    private _prodService: ProductsService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.products = product;
      console.log(product);
    }
    );

    this.BindProductByPopular();
    this.BindBannerImage();
  }

  BindProductByPopular() {
    debugger

    this._prodService.BindProductByPopular().subscribe(products => {
      debugger;
      this.Popularproducts = products;

    });
  }

  BindBannerImage() {
    debugger

    this._prodService.GetBannerProduct().subscribe(products => {
      debugger;
      this.slides= products;

    });
  }

  // Collection banner
  public discount = [{
    image: 'assets/images/product/product1.jpg',
    title: 'Tablets, Smartphones and more',
    subtitle: 'Sale up to 30%',
  }, {
    image: 'assets/images/product/product4.jpg',
    title: 'New Cameras Collection',
    subtitle: 'Sale up to 30%',
  }, 
  // {
  //   image: 'assets/images/product/product3.jpg',
  //   title: 'New Cameras Collection',
  //   subtitle: 'Sale up to 30%',
  // }, {
  //   image: 'assets/images/product/product2.jpg',
  //   title: 'New Cameras Collection',
  //   subtitle: 'Sale up to 30%',
  // }

  ]

}
