import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isBottomSheetOpen = false;

  constructor() { }

  setBottomSheetOpen() {
    this.isBottomSheetOpen = !this.isBottomSheetOpen
  }
  
}
