import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { Router } from '@angular/router';
import { Technology } from 'src/app/models/technology';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor(private technologyService: TechnologyService, private router: Router) { }

  protected technologies: Technology[] = [];

  protected getTechnologies() {
    this.technologyService.getTechnologies().subscribe(res => {
      console.log('result of get technologies : ', res);
      this.technologies = res.technologies
    })
  }

  protected goToAddTechnologyPage() {
    this.router.navigate(['/technologies/add']);
  }

  protected deleteTechnology(technology) {
    this.technologyService.deleteTechnology(technology.id).subscribe(response_object => {
      let response;
      response = response_object;
      if (response.message == 'success delete technology') {
        this.technologies.splice(this.technologies.findIndex( e => {return e.id == technology.id;}), 1);
      }
    });
  }

  ngOnInit() {
    this.getTechnologies();
  }

}