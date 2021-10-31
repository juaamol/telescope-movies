import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-label',
  templateUrl: './icon-label.component.html',
  styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent implements OnInit {

  @Input() label: string | number = '';

  constructor() { }

  ngOnInit(): void {
  }

}
