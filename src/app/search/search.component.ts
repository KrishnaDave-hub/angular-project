import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  enteredSearchValue:string = '';
  @Output()
  searchtextChanged:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  onSearchTextChanged(){
    this.searchtextChanged.emit(this.enteredSearchValue)
  }
}
