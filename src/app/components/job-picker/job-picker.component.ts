import { Component, OnInit } from '@angular/core';
import { JobListService } from 'src/app/service/job-list.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface jobBusiness {
  name: string
}

@Component({
  selector: 'app-job-picker',
  standalone: true,
  imports: [DropdownModule, FormsModule,ReactiveFormsModule],
  templateUrl: './job-picker.component.html',
  styleUrl: './job-picker.component.scss'
})

export class JobPickerComponent implements OnInit {
  jobBusinessList: jobBusiness[];
  selectedBusiness: jobBusiness;
  selectedBusinessForm: jobBusiness;
  form:FormGroup

  constructor(private jobService: JobListService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.jobService.getJobBusinessList().then((Business) => {
      this.jobBusinessList = Business
    })
    this.form = this.fb.group({
      selectedBusiness:['',Validators.required]
    });
  }

  onSubmit(){
    const verify = this.form.get('selectedBusiness')?.value ?? false;
    if(verify){
      console.log(verify)
    }
  }

  // getData(){
  //   return this.selectedBusinessForm
  // }

}
