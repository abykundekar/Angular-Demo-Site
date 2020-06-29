import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews : Object;
  menus : Object;
  categories : Object;
  totalId : string = "";
  title : string = "";
  haveSubCategory : boolean = true;
  constructor(private _http: HttpService) {
  }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });

    this._http.getMenu().subscribe(data => {
      this.menus = data;
      
      this.categories = this.menus.menus[0].categories;
      this.totalId = this.menus.menus[0].id;
      this.title = this.menus.menus[0].name;
      //console.log(this.categories);
    });
  }

  checkSubcategory(categoryId : string){
    console.log(categoryId);
    this.totalId = this.totalId + " = " + categoryId;
    console.log("total id is "+ this.totalId);
    
    for(let cat of this.categories){
      if(cat.id === categoryId){
        this.title = cat.name;
        if(cat.subCategories.length === 0){
          this.categories  = cat.items;
          this.haveSubCategory = false;
        }else{
          this.categories = cat.subCategories;
          this.haveSubCategory = true;
        }
      }else{
        
      }
    }
  }
  
  goBack(){
    var idarray = this.totalId.trim().split("=")
    var gMenu : Object;
    // for(let menu of this.menus.menus){
    //   if(menu.id === idarray[0]){
    //     gMenu = menu;
    //     break;
    //   }
    // }
    for(let id of idarray){
      console.log(id);
    }
    
    for(let menu of this.menus.menus){
      if(menu.id.trim().match(idarray[0].trim()) === null){
          
      }else{
        //got the match
        console.log("got the menu");
        gMenu = menu;
        break;
      }
    }
    if(idarray.length === 2){
      this.totalId = idarray[0]
      this.categories = gMenu.categories;
      this.haveSubCategory = true;
    }
    if(idarray.length === 3){
      this.totalId = idarray[0] + "=" +idarray[1]
      this.haveSubCategory = true;
      for(let category of gMenu.categories){
        if(category.id.trim().match(idarray[1].trim()) === null){
        }else{
            this.categories = category.subCategories;
        }
      }
    }

  }


}
