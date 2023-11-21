import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import {  } from "../mock_data.json";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  selectedValue: any; 
  genderSelection :any;
  availableSelecion :any;
  
  @Output()
  filterSelectOptionChanged:EventEmitter<string> = new EventEmitter<string>();

  onOptionSelected(event: Event) {
    this.selectedValue = (event.target as HTMLSelectElement).value;
    this.filterSelectOptionChanged.emit(this.selectedValue);
    console.log(this.selectedValue,"ChildComponent");
  }
  onGenderSelected(event: Event) {
    this.genderSelection = (event.target as HTMLSelectElement).value;
    this.filterSelectOptionChanged.emit(this.genderSelection);
    console.log(this.genderSelection,"ChildComponent");
  }
  
  constructor() { }

  ngOnInit() {
  }
  @Input() all:number = 0
  @Input() sales:number = 0
  @Input() management:number = 0
  @Input() marketing:number = 0
  @Input() finance:number = 0
  @Input() BD:number = 0
  @Input() IT:number = 0
  @Input() UI:number = 0
  @Input() male:number = 0
  @Input() female:number = 0
  @Input() allGender:number = 0
  @Input() available:number = 0
  @Input() noAvailable:number = 0
}
