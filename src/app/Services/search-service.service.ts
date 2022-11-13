import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../Interface/SearchModals';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(
    private http:HttpClient
  ) { }

  url="https://my-json-server.typicode.com/Uxtrendz/apis/videoList";

  getSearches(search:String):Observable<Search>{
    return this.http.get<Search>(this.url+`?q=${search}`);
  }

}
