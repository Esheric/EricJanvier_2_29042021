import { Component, OnInit } from '@angular/core';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faChildren } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  accommodationsIcon = faHouseChimneyUser;
  activitiesIcon = faIcons;
  economicIcon = faPiggyBank;
  familyIcon = faChildren;
  romanticIcon = faHeart;
  petsIcon = faDog;

  constructor() {}

  ngOnInit(): void {}
}
