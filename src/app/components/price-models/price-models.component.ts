import { Component, OnInit } from '@angular/core';
import { PriceModelService } from '../../services/price-model/price-model.service';
import { Router } from '@angular/router';
import { PriceModel } from 'src/app/models/price-model';

@Component({
  selector: 'app-price-models',
  templateUrl: './price-models.component.html',
  styleUrls: ['./price-models.component.css']
})
export class PriceModelsComponent implements OnInit {

  constructor(private priceModelService: PriceModelService, private router: Router) { }

  protected priceModels: PriceModel[] = [];

  protected getPriceModels() {
    this.priceModelService.getPriceModels().subscribe(res => {
      console.log('result of getPriceModels : ', res);
      this.priceModels = res.priceModels;
    })
  }

  protected goToAddPriceModelPage() {
    this.router.navigate(['/price-model/add']);
  }

  protected deletePriceModel(priceModel) {
    this.priceModelService.deletePriceModel(priceModel.id).subscribe(response_object => {
      let response;
      response = response_object;
      if (response.message == 'success delete price model') {
        this.priceModels.splice(this.priceModels.findIndex( e => {return e.id == priceModel.id;}), 1);
      }
    });
  }

  ngOnInit() {
    this.getPriceModels();
  }

}
