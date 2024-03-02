import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { UniversityListService } from 'src/app/service/university-list.service';

interface universityName {
  name: string
}


@Component({
  selector: 'app-search-university',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './search-university.component.html',
  styleUrl: './search-university.component.scss'
})

export class SearchUniversityComponent implements OnInit {
  collegeList: universityName[]
  form: FormGroup
  filteredUniversities: universityName[]
  constructor(private universityService: UniversityListService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.universityService.getUniversityList().then((university) => {
      this.collegeList = university
    })

    this.form = this.fb.group({
      selectedCollege: ['', Validators.required]
    });

  }
  search(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;
    this.collegeList?.forEach((college) => {
      if (college.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || college.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(college)
      }
    })
    this.filteredUniversities = filtered;
  }

  onSubmit(){
    const verify = this.form.get('selectedCollege')?.value ?? false;
    if(verify){
      console.log(verify)
    }
  }

}
