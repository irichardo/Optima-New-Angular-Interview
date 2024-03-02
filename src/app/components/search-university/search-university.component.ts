import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { UniversityListService } from 'src/app/service/university-list.service';

interface universityName{
  name:string
}


@Component({
  selector: 'app-search-university',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './search-university.component.html',
  styleUrl: './search-university.component.scss'
})

export class SearchUniversityComponent implements OnInit {
  universityList:universityName[]
  formGroup : FormGroup
  filteredUniversities:universityName[]
  constructor(private universityService:UniversityListService){}

  ngOnInit(): void {
    this.universityService.getUniversityList().then((university)=>{
      this.universityList = university
    })

    this.formGroup = new FormGroup({
      selectedCountry: new FormControl<object|null>(null)
    })

}
search(event: AutoCompleteCompleteEvent) {
  let filtered: any[] = [];
  let query = event.query;
  this.universityList?.forEach((university)=>{
    if(university.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || university.name.toLowerCase().includes(query.toLowerCase())){
      filtered.push(university)
    }
  })
  this.filteredUniversities = filtered;
}

}
