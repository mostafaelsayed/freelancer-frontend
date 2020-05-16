import { Component, OnInit, Input } from '@angular/core';
import { Technology } from 'src/app/models/technology';
import { ActivatedRoute } from '@angular/router';
import { TechnologyService } from '../../services/technology/technology.service';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private technologyService: TechnologyService) { }

  @Input() public technology: Technology;

  public loading: boolean = true;

  public getTechnology(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    // The "name" key returns the name of the technology to fetch.
    // use "+" if the param should be a number (like id) to convert it to number (params are always strings by default).
    const id = +this.route.snapshot.paramMap.get('id');
    this.technologyService.getTechnologyById(id).subscribe(technology => {
      this.loading = false;
      console.log(technology);
      setTimeout(() => {
        this.technology = technology;
      }, 100);  
      
    });
  }

  public editTechnology() {
    this.technologyService.editTechnology(this.technology).subscribe(technology => {
      console.log('success edit technology response : ', technology);
    });
    
  }

  ngOnInit() {
    this.getTechnology();
  }

}
