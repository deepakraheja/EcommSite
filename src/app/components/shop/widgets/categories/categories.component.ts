import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/Service/Subcategory.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  lstsubCategory = [];

  constructor(private _subcatService: SubCategoryService) { }

  ngOnInit() {
 ;
    this.BindSideSubCategory(); 
  }
  BindSideSubCategory() {
 ;
   
    let subCatObj = {
      SideSubCategory: 1

    }

    this._subcatService.GetSideSubcategory(subCatObj).subscribe(res => {
      this.lstsubCategory = res;
    });
  }
}
