import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology/technology.service';

@Component({
  selector: 'app-technology-add',
  templateUrl: './technology-add.component.html',
  styleUrls: ['./technology-add.component.css']
})
export class TechnologyAddComponent implements OnInit {

  protected technologyToAdd = {
    name: ''
  };

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
  }

  protected addTechnology() {
    this.technologyService.addTechnology(this.technologyToAdd).subscribe((success) => {
      console.log('success add technology : ', success);
    });
  }
}
