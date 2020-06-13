import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BrandService } from 'src/app/Service/Brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent implements OnInit {

  //brands: string[] = ['all', 'Lenovo', 'Dell', 'Apple', 'Lg', 'Samsung'];
  //brands: string[] = ['all', 'Brand-1', 'Brand-2', 'Brand-3', 'Brand-4', 'Brand-5'];
  lstbrands: string[] = [];

  @Output() brandChanged = new EventEmitter();
  constructor(private _brandService: BrandService, ) { }

  ngOnInit() {
    this.BindCategory();
  }

  BindCategory() {
    debugger;
    let CatObj = {
      Active: 1

    }

    this._brandService.GetBrand(CatObj).subscribe(res => {
      this.lstbrands = res;
    });
  }
  brendSelect(event) {
    this.brandChanged.emit(
      event.value
    );
  }

}
