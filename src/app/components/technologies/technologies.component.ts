import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor(private technologyService: TechnologyService, private router: Router) { }

  protected technologies: [] = [];

  protected getTechnologies() {
    this.technologyService.getTechnologies().subscribe(res => {
      console.log('result of get technologies : ', res);
      this.technologies = res.technologies
    })
  }

  protected goToAddTechnologyPage() {
    this.router.navigate(['/technologies/add']);
  }

  ngOnInit() {
    this.getTechnologies();
  }

}