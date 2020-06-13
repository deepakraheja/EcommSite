import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/Service/Subcategory.service';

@Component({
  selector: 'app-categoriesall',
  templateUrl: './categoriesall.component.html',
  styleUrls: ['./categoriesall.component.sass']
})
export class CategoriesallComponent implements OnInit {
  lstsubCategory = [];

  constructor(private _subcatService: SubCategoryService) { }

  ngOnInit() {
 ;
    this.BindSubCategory();
  }
  BindSubCategory() {
 ;
    let subCatObj = {
      SideSubCategory: null

    }

    this._subcatService.GetSideSubcategory(subCatObj).subscribe(res => {
      this.lstsubCategory = res;
    });
  }
}
