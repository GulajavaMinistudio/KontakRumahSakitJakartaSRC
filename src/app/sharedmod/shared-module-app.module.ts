import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterSearchPuskesmasPipe} from './filter-search-puskesmas.pipe';
import { SusunTeleponPipe } from './susun-telepon.pipe';
import { FilterSearchRsuPipe } from './filter-search-rsu.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FilterSearchPuskesmasPipe, SusunTeleponPipe, FilterSearchRsuPipe],
  exports: [FilterSearchPuskesmasPipe, SusunTeleponPipe, FilterSearchRsuPipe]
})
export class SharedModuleAppModule {
}
