import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PriceModel } from 'src/app/models/price-model';

@Injectable({
  providedIn: 'root'
})
export class PriceModelService {

  private apiUrl = environment.apiUrl;

  getPriceModels(): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getPriceModels');
  }

  addPriceModel(priceModelData): Observable<any> {
    return this.http.post(this.apiUrl + '/api/addPriceModel', priceModelData);
  }

  getPriceModelyById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/api/getPriceModelyById/' + id);
  }

  editPriceModel(priceModel: PriceModel) {
    return this.http.put(this.apiUrl + '/api/editPriceModel', priceModel);
  }

  deletePriceModel(id: number) {
    return this.http.delete(this.apiUrl + '/api/deletePriceModel/' + id);
  }

  constructor(private http: HttpClient) { } 


}
