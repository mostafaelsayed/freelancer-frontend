import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayLoaderComponent } from './overlay-loader/overlay-loader.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayService } from './services/overlay.service';


@NgModule({
  declarations: [OverlayLoaderComponent],
  imports: [MatButtonModule, MatCheckboxModule, CommonModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, OverlayModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, OverlayModule, OverlayLoaderComponent],
  providers: [OverlayService],
  entryComponents: [OverlayLoaderComponent]
})
export class SharedModule { }
