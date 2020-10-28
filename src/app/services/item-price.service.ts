import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ItemPriceModel } from '../models/item-price.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemPriceService {
  basePath = 'https://www.albion-online-data.com/api/v2/stats/prices';

  //https://www.albion-online-data.com/api/v2/stats/View/T5_BAG%2CT5_BAG%401%2CT5_BAG%402%2CT5_BAG%403?locations=Lymhurst%2CFortSterling%2CMartlock%2CBridgewatch&qualities=1

  constructor(private http: HttpClient) {}

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

  getItemPriceBySearch(searchInfo): Observable<ItemPriceModel[]> {
    //console.log('ERROR getItemBySearch: ' + searchInfo.city);

    // console.log(
    //   this.basePath +
    //     '/' +
    //     searchInfo.item +
    //     '?locations=' +
    //     searchInfo.city +
    //     '&qualities=' +
    //     searchInfo.quality
    // );

    //return this.http.get<Item[]>(`${this.basePath} / ${searchInfo.item} ?locations= ${searchInfo.city} &qualities= ${searchInfo.quality}`)
    return this.http
      .get<ItemPriceModel[]>(
        this.basePath +
          '/' +
          searchInfo.item +
          '?locations=' +
          searchInfo.city +
          '&qualities=' +
          searchInfo.quality
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  // getItemById(id): Observable<Item[]> {
  //   console.log('ERROR1: ' + this.basePath);

  //   // https://www.albion-online-data.com/api/v2/stats/prices
  //   // /T4_BAG,T4_BAG@1,T4_BAG@2,T4_BAG@3
  //   // ?locations=Caerleon,Lymhurst,Bridgewatch,Martlock,FortSterling&qualities=1

  //   return this.http
  //     .get<Item[]>(
  //       this.basePath +
  //         '/' +
  //         id +
  //         '?locations=Lymhurst%2CFortSterling%2CMartlock%2CBridgewatch&qualities=1'
  //     )
  //     .pipe(retry(2), catchError(this.handleError));
  // }
}
