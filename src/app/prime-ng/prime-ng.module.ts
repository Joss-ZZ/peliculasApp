import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    MenubarModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
