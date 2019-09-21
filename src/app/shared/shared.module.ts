import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, CommonModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule],
})
export class SharedModule { }
