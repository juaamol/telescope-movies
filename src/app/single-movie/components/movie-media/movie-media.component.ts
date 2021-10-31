import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-media',
  templateUrl: './movie-media.component.html',
  styleUrls: ['./movie-media.component.scss']
})
export class MovieMediaComponent implements OnInit {

  @Input() trailerUrl = '';
  @Input() imageUrl = '';
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
