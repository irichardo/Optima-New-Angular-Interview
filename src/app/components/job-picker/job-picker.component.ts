import { Component, OnInit } from '@angular/core';
import { JobListService } from 'src/app/service/job-list.service';
import { DropdownModule } from 'primeng/dropdown';

interface jobBusiness{
  name:string
}

@Component({
  selector: 'app-job-picker',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './job-picker.component.html',
  styleUrl: './job-picker.component.scss'
})

export class JobPickerComponent implements OnInit {
  jobBusinessList: jobBusiness[];
  selectedBusiness:jobBusiness;
  
  constructor(private jobService: JobListService){}
  
  ngOnInit(): void {
    this.jobService.getJobBusinessList().then((Business)=>{
      this.jobBusinessList = Business
    })    
  }
}
