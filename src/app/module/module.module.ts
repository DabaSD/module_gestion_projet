import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProjetService } from '../services/projet.service';


@NgModule({
  providers: [ProjetService],
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, 
    HttpClientModule
  ]
})
export class ModuleModule { }
