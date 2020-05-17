import { Component, OnInit } from '@angular/core';
import { PriceModelService } from 'src/app/services/price-model/price-model.service';

@Component({
  selector: 'app-price-model-add',
  templateUrl: './price-model-add.component.html',
  styleUrls: ['./price-model-add.component.css']
})
export class PriceModelAddComponent implements OnInit {

  constructor(private priceModelService: PriceModelService) { }

  protected priceModelToAdd = {
    name: ''
  };

  protected addPriceModel() {
    this.priceModelService.addPriceModel(this.priceModelToAdd).subscribe((response) => {
      console.log('add price model response : ', response);
    });
  }

  ngOnInit() {
  }

}
