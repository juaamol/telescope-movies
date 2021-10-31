import { Component, Input, OnInit } from '@angular/core';
import { Keyword } from '../../models/keyword';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent implements OnInit {
  @Input() description = '';
  @Input() keywords: Keyword[] = [];

  constructor() {}

  ngOnInit(): void {}
}
