import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  faLocationDot = faLocationDot;
  faSearch = faSearch;

  constructor(public media: MediaObserver) {}

  ngOnInit(): void {}
}
