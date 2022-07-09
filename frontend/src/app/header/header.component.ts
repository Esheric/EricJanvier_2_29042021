import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  accommodationsIcon = faHouseChimneyUser;
  activitiesIcon = faIcons;
  reservationsIcon = faCartFlatbedSuitcase;
  userIcon = faIdCard;
  constructor(public media: MediaObserver) {}

  ngOnInit(): void {}
}
