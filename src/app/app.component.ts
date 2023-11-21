import { Component, EventEmitter, Output } from '@angular/core';
import empData from "./mock_data.json";
import { MatPaginator,PageEvent  } from '@angular/material/paginator';

interface EmployeData{
  "id":number,
  "first_name":string,
  "last_name":string,
  "email":string,
  "gender":string,
  "avatar":string,
  "domain":string,
  "available":boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Heliverse';

  empdata:EmployeData[] = empData;
  pageSlice = this.empdata.slice(0,6);


  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.empdata.length){
      endIndex = this.empdata.length
    }
    this.pageSlice = this.empdata.slice(startIndex,endIndex);
  }

  searchText:string='';
  onSearchtextEntered(searchValue:string){
    this.searchText = searchValue
    console.log(this.searchText);

  }

  getTotalEmp(){
    return this.empdata.length;
  }
  getTotalDominSales(){
    return this.empdata.filter(empData => empData.domain === 'Sales' ).length;
  }
  getTotalDominManagement(){
    return this.empdata.filter(empData => empData.domain === 'Management' ).length;
  }
  getTotalDominMarketing(){
    return this.empdata.filter(empData => empData.domain === 'Marketing' ).length;
  }
  getTotalDominFinance(){
    return this.empdata.filter(empData => empData.domain === 'Finance' ).length;
  }
  getTotalDominIT(){
    return this.empdata.filter(empData => empData.domain === 'IT' ).length;
  }
  getTotalUI(){
    return this.empdata.filter(empData => empData.domain === 'UI Designing' ).length;
  }
  getTotalBD(){
    return this.empdata.filter(empData => empData.domain === 'Business Development' ).length;
  }
  getTotalFemale(){
    return this.empdata.filter(empData => empData.gender === 'Female' ).length;
  }
  getTotalMale(){
    return this.empdata.filter(empData => empData.gender === 'Male' ).length;
  }
  getTotalAvailable(){
    return this.empdata.filter(empData => empData.available === true ).length;
  }
  getTotalNoAvailable(){
    return this.empdata.filter(empData => empData.available === false ).length;
  }
  getTotalAllGender(){
    return this.empdata.filter(empData => empData.gender).length;
  }

  empCountSelected:string='All'
  empGenderSelected:string='Total Members'
  onFilterOptionChanged(data:string){
    this.empCountSelected = data
    this.empGenderSelected = data
    console.log(this.empCountSelected,"parentComponent");
    console.log(this.empGenderSelected,"parentComponent");
  }

}
