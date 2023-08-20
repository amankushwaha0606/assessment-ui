import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<boolean>();

  public tags = [
    "UI/UX and Design",
    "No of Question",
    "Web Development",
    "UI/UX and Design",
    "Web Development"
  ]
  constructor(private commonService: CommonService) {}


  ngOnInit(): void {
  }

  toggleBottomSheet() {
    this.toggleEvent.emit(true);
  }
}
