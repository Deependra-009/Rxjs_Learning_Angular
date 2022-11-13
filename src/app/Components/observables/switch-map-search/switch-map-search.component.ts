import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { Search } from 'src/app/Interface/SearchModals';
import { SearchServiceService } from 'src/app/Services/search-service.service';

@Component({
  selector: 'app-switch-map-search',
  templateUrl: './switch-map-search.component.html',
  styleUrls: ['./switch-map-search.component.css']
})
export class SwitchMapSearchComponent implements OnInit,AfterViewInit {
// http://my-json-server.typicode.com/Uxtrendz/apis/videoList
  @ViewChild("searchForm")
  searchForm!:NgForm

  searchResult!:Search[]

  count:any;

  arr=[]

  constructor(
    private searchService:SearchServiceService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
    const formValue=this.searchForm.valueChanges;

    formValue
    ?.pipe(
      filter(()=>this.searchForm.value.searchTerm!=''),
      pluck('searchTerm'),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(res=>this.searchService.getSearches(res))
      // map(res=>res.searchTerm)
    ).subscribe((res:any)=>{
      console.log(res);
      this.searchResult=res;
      this.count=res.length;
      
      
    })

    

    

  }

}
