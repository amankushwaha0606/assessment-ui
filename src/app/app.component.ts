import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'assessmentUI';
  public isBottomSheetOpen = false;
  public isMobileMenuOpen = false;
  public showStats = false;
  public isMobile = false;
  public assessments = [
    {
      title: 'Math Assessment',
      subTitle: 'Job',
      logo: '../assets/images/assessment_logo.svg',
      date: '20 Apr 2023',
      duration: '00',
      questionCount: '00',
      shareList: ['LP'],
    },
    {
      title: 'Math Assessment',
      subTitle: 'Job',
      logo: '../assets/images/assessment_logo.svg',
      date: '20 Apr 2023',
      duration: '00',
      questionCount: '00',
      shareList: ['LP', 'LP', 'LP', 'LP'],
    },
    {
      title: 'Math Assessment',
      subTitle: 'Job',
      logo: '../assets/images/assessment_logo.svg',
      date: '20 Apr 2023',
      duration: '00',
      questionCount: '00',
      shareList: ['LP', 'LP', 'LP'],
    },
  ];

  constructor(private commonService: CommonService) {
    this.isBottomSheetOpen = this.commonService.isBottomSheetOpen;
  }

  ngOnInit(): void {
    const screenWidth =
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.innerWidth;
    if (screenWidth < 600) {
      this.isMobile = true;
    }
  }

  toggleBottomSheet() {
    this.commonService.setBottomSheetOpen();
    this.isBottomSheetOpen = this.commonService.isBottomSheetOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleStats() {
    this.showStats = !this.showStats;
  }
  
  getSharePeopleCount(index: number) {
    let countPeople = this.assessments[index].shareList.length - 3;
    return '+' + countPeople;
  }
}
