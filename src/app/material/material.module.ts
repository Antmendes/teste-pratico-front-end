import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
