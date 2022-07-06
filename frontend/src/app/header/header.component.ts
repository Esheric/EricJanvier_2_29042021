import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faIdCard = faIdCard;
  faBed = faBed;
  constructor(public media: MediaObserver) {}

  ngOnInit(): void {}
}
