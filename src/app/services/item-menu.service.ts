import { Injectable } from '@angular/core';

import { CategoryModel } from '../models/category.model';
import { SubCategoryModel } from '../models/subcategory.model';
import { CATEGORY, SUBCATEGORY, ENCHANTED, QUALITY, TIER } from '../utilities/db-mock';

import { ItemModel } from '../models/item.model';
//import ITEM from '../../assets/items.json';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemMenuService {
  basePath = '../../assets/items.json';

  json = require('../../assets/items.json'); //(with path)
  items: any;

  constructor(private http: HttpClient) {}

  getCategoryByAll() {
    return CATEGORY;
  }

  getCategoryByName(name: string): CategoryModel {
    return CATEGORY.find((category) => category.name === name);
  }

  getSubCategoryByAll() {
    return SUBCATEGORY;
  }

  getSubCategoryByName(name: string): SubCategoryModel {
    return SUBCATEGORY.find((subcategory) => subcategory.name === name);
  }

  getTierByAll(){
    return TIER;
  }

  getQualityByAll(){
    return QUALITY;
  }

  getEnchantedByAll(){
    return ENCHANTED;
  }


  getItemByAll() {
    return this.json;    
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      console.error(
        `Backend returnedcode ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
