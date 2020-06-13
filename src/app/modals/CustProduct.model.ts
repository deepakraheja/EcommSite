// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class CustProduct {
  productID?: number;
  productName?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  subcategoryName?: string;
  small?: string;
  large?: string;
  tags?: ProductTags[];
  colors?: ProductColor[];
  rowID?: string;

  type?: string;
  imagePath?: string;
  title?: string;
  subTitle?: string;
  bannerImage?: string;
  frontImage?: string;
  
  constructor(
    productID?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    pictures?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    small?: string,
    large?: string,
    subcategoryName?: string,
    tags?: ProductTags[],
    colors?: ProductColor[],
    rowID?: string,

    type?: string,
    imagePath?: string,
    title?: string,
    subTitle?: string,
    bannerImage?: string,
    frontImage?: string,
    
  ) {
    this.productID = productID;
    this.productName = name;
    this.price = price;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.small = small;
    this.large = large;
    this.subcategoryName = subcategoryName;
    this.tags = tags;
    this.colors = colors;
    this.rowID = rowID;

    this.type = type;
    this.imagePath = imagePath;
    this.subTitle = subTitle;
    this.bannerImage = bannerImage;
    this.frontImage = frontImage
  }

}
// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}
