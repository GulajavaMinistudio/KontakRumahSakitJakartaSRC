import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterSearchPuskesmasPipe} from './filter-search-puskesmas.pipe';
import {SusunTeleponPipe} from './susun-telepon.pipe';
import {FilterSearchRsuPipe} from './filter-search-rsu.pipe';
import { FilterSearchRskPipe } from './filter-search-rsk.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FilterSearchPuskesmasPipe, SusunTeleponPipe, FilterSearchRsuPipe, FilterSearchRskPipe],
  exports: [FilterSearchPuskesmasPipe, SusunTeleponPipe, FilterSearchRsuPipe, FilterSearchRskPipe]
})
export class SharedModuleAppModule {
}
