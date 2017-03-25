import {Injectable} from '@angular/core';

@Injectable()
export class WindowGetterService {

  constructor() {
  }

  getWindowInstance(): any {
    return window;
  }
}
