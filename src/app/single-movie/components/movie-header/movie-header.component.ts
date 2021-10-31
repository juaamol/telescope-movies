import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss']
})
export class MovieHeaderComponent implements OnInit {

  @Input() title = '';
  @Input() metadata = '';

  constructor() { }

  ngOnInit(): void {
  }

}
