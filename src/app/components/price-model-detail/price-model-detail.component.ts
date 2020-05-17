import { Component, OnInit } from '@angular/core';
import { PriceModelService } from '../../services/price-model/price-model.service';
import { ActivatedRoute } from '@angular/router';
import { PriceModel } from 'src/app/models/price-model';

@Component({
  selector: 'app-price-model-detail',
  templateUrl: './price-model-detail.component.html',
  styleUrls: ['./price-model-detail.component.css']
})
export class PriceModelDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private priceModelService: PriceModelService) { }

  protected priceModel: PriceModel;
  protected loading = true;

  public getPriceModel(): void {
    // The route.snapshot is a static image of the route information shortly after the component was created.
    // The paramMap is a dictionary of route parameter values extracted from the URL.
    // The "name" key returns the name of the project to fetch.
    // use "+" if the param should be a number (like id) to convert it to number (params are always strings by default).
    const id = +this.route.snapshot.paramMap.get('id');
    this.priceModelService.getPriceModelyById(id).subscribe(priceModel => {
      this.loading = false;
      console.log(priceModel);
      setTimeout(() => {
        this.priceModel = priceModel;
      }, 100);  
      
    });
  }


  public editPriceModel() {
    this.priceModelService.editPriceModel(this.priceModel).subscribe(priceModel => {
      console.log('edit price model response : ', priceModel);
    });
  }

  ngOnInit() {
    this.getPriceModel();
  }

}
