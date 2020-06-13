import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
import { SubCategoryService } from 'src/app/Service/Subcategory.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  lstCategory: any = [];
  categoryID: number;
  SubCategory: any = [];

  constructor(private _catService: CategoryService,
    private _subcatService: SubCategoryService) {

    this.BindCategory();
  }

  ngOnInit() {


  }
  BindCategory() {
 ;
    let CatObj = {
      Active: 1

    }

    this._catService.GetCategory(CatObj).subscribe(res => {
      this.lstCategory = res;

      this.lstCategory.forEach((value, index) => {
        if (value['categoryID'] > 0) {
          this.categoryID = value['categoryID'];
          let subCatObj = {
            categoryID: this.categoryID,
            Active: 1

          }
          var ObjCategory = [];
          ObjCategory = res;
          this._subcatService.GetSubcategoryByCatId(subCatObj).subscribe(res => {
         
            if (res != null && res.length > 0) {
              ObjCategory[index]['categoryID'] = res;
              this.SubCategory = ObjCategory;
            }
          });

        }
      });
    });
  }

  openMegaMenu() {
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
      if (el.children.length > 0) {
        if (el.children[0].classList.contains('mega-menu')) {
          el.classList.add('mega-menu-pane');
        }
      }
    });
  }
}
