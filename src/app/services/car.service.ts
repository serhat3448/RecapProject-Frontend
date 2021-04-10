import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44367/api/cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(this.apiUrl);
  }
}